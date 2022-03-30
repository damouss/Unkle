import React from 'react';
import { useLayer, Arrow } from "react-laag";
import Form from 'react-bootstrap/Form';
import { motion, AnimatePresence } from "framer-motion";


const PasswordTooltip = () => {
    const [value, setValue] = React.useState("");
        const [hasFocus, setFocus] = React.useState(false);
      
        const {
          renderLayer,
          triggerProps,
          layerProps,
          arrowProps,
          triggerBounds
        } = useLayer({
          isOpen: hasFocus,
          overflowContainer: false,
          auto: true,
          snap: true, 
          placement: "top-start",
          possiblePlacements: ["top-start", "bottom-start", "right-center", "left-center"],
          triggerOffset: 12, 
          containerOffset: 16, 
          arrowOffset: 8 
        
    });
    const validationMap = {
        lowercase: value => /[a-z]/.test(value),
        uppercase: value => /[A-Z]/.test(value),
        special: value => /[\!\@\#\$\%\^\&\*\+\_\-\~]/.test(value),
        numeric: value => /[0-9]/.test(value),
        length: value => value.length >= 8
    };
    function Requirement({ children, type, value }) {
        const predicate = validationMap[type];
        const isValid = predicate(value);
      
        return (
          <li className="requirement">
            <span className='requirement-valid'>{isValid ? "✔︎" : ""}</span>&nbsp;
            {children}
          </li>
        );
    }
    return (
        <>
      <Form.Control className='input-in-box'
        {...triggerProps}
        type="password"
        value={value}
        onChange={evt => setValue(evt.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="Choose a password..."
      />
      {hasFocus && renderLayer(
        <AnimatePresence>
            <motion.ul
             className="requirements"
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.9 }}
             transition={{ duration: 0.1 }}
             {...layerProps}
             style={{
                ...layerProps.style,
                width: triggerBounds.width // keep same with as the input-element
             }}
            
            >
            <div className='bold text-center mb-3'>Choose a secure password</div>
            <Requirement value={value} type="length">
                8 characters
            </Requirement>
            <Requirement value={value} type="uppercase">
                1 uppercase letter
            </Requirement>
            <Requirement value={value} type="lowercase">
                1 lowercase letter
            </Requirement>
            <Requirement value={value} type="special">
                1 special character
            </Requirement>
            <Requirement value={value} type="numeric">
                1 number
            </Requirement>
            <Arrow {...arrowProps} />
            </motion.ul>
        </AnimatePresence>
      )}
    </>
    );
};

export default PasswordTooltip;