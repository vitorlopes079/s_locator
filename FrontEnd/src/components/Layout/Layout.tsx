import React, { ReactNode, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import styles from './Layout.module.css';
import ExpandableMenu from '../ExpandableMenu/ExpandableMenu';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import ProducerView from '../../pages/ProducerView/ProducerView';
import { MdInfo, MdMap, MdTableChart, MdFactory } from 'react-icons/md';
import Dataview from '../../pages/Dataview/DataviewPage';

interface LayoutProps {
  children?: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <div className={styles.layout}>
       <ExpandableMenu isExpanded={isMenuExpanded} toggleMenu={toggleMenu}>
        <ul className={styles.menuList}>
          <li>
            <Link to="/">
              <MdMap className={styles.icon} />
              {isMenuExpanded && <span> Home</span>}
            </Link>
          </li>
          <li>
            <Link to="/tabularView">
              <MdTableChart className={styles.icon} />
              {isMenuExpanded && <span> Tabular View</span>}
            </Link>
          </li>
          <li>
            <Link to="/about">
              <MdInfo className={styles.icon} />
              {isMenuExpanded && <span> About</span>}
            </Link>
          </li>
          <li>
            <Link to="/producerView">
              <MdFactory className={styles.icon} />
              {isMenuExpanded && <span> producer view</span>}
            </Link>
          </li>
          
        </ul>
      </ExpandableMenu>
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabularView" element={<Dataview />} />
          <Route path="/about" element={<About />} />
          <Route path="/producerView" element={<ProducerView />} />
        </Routes>
        {children}
      </div>
    </div>
  );
};

export default Layout;
