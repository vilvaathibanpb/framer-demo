import React from 'react';
import { motion } from 'framer-motion';


const items = [1,2,3,4,5,6,7,8,9,10];
const Numbers = () => {
    const [selectedID, setSelectedID] = React.useState(0);
  
    return (
      <ul>
        {items.map((item, index) => (
          <li
            style={{
              position: 'relative'
            }}
            key={index}
            onClick={() => setSelectedID(index)}
          >
            <motion.p className='title' style={{ padding: '20px', fontSize: '16px' }}>{item}</motion.p>
            {selectedID === index && (
              <motion.div
                style={{
                  position: 'absolute',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  border: '4px solid red'
                }}
              />
            )}
          </li>
        ))}
      </ul>
    );
  };

  export default Numbers;