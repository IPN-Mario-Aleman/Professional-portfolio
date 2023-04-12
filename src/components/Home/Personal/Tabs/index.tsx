import { useState } from 'react'
import { initialTabs as tabs } from './tabs'
import { motion, AnimatePresence } from 'framer-motion'
import AboutMe from '../TabContainer/AboutMe'
import ContactMe from '../TabContainer/ContactMe'

const Nav = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div
          key={selectedTab ? selectedTab.label : 'empty'}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {selectedTab.label === 'About Me'
            ? <AboutMe
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            : <ContactMe
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Nav
