import React from 'react';
import { useLayer, Arrow } from "react-laag";
import { motion, AnimatePresence } from "framer-motion";

import { HoverTooltip } from './HoverTooltip';

const ClickTooltip = () => {

    const [isOpen, setOpen] = React.useState(false);

  const { renderLayer, triggerProps, layerProps, arrowProps } =
    useLayer({
      isOpen,
      overflowContainer: false,
      auto: true,
      snap: true,
      triggerOffset: 8,
      arrowOffset: 4,
      onDisappear: (disappearType) => {
        if (disappearType === "full") {
          setOpen(false);
        }
      },
      onOutsideClick: () => setOpen(false)
    });
    
    return (
        <>
        <button className='btn btn-primary pink btn-in-box' {...triggerProps} onClick={() => setOpen(!isOpen)}>
            Click me
        </button>
        
        {isOpen &&
            renderLayer(
                <AnimatePresence>
                    <motion.div className='tooltip-content'  
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.1 }}              
                        {...layerProps}
                        style={{ ...layerProps.style, width: 200, height: 150 }}
                    >        
                        <div>
                            <div className='text-center mb-3'>Tooltip in tooltip</div>
                            <HoverTooltip text="I'm a tooltip">
                                <button className='btn btn-primary dark'>Hover me</button>
                            </HoverTooltip>
                        </div>
                        
                        <Arrow {...arrowProps} size={5} roundness={0} />
                    </motion.div>
                </AnimatePresence>
            )}
        
        </>
    );
};

export default ClickTooltip;