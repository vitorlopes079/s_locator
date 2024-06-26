import React, { useState, MouseEvent } from "react";
import styles from "./CatalogSideMenu.module.css";
import { MdLayers, MdArrowBackIos } from "react-icons/md";
import { useUIContext } from "../../context/UIContext";
import DataContainer from "../DataContainer/DataContainer";
import { useCatalogContext } from "../../context/CatalogContext";

function CatalogSideMenu() {
  const { openModal, setSidebarMode } = useUIContext();
  const { setSelectedContainerType, selectedContainerType } =
    useCatalogContext();

  function openCatalogModal(contentType: "Catalogue" | "Layer") {
    setSelectedContainerType(contentType);
    openModal(<DataContainer />);
  }

  function handleBackClick(event: MouseEvent) {
    setSidebarMode("default");
  }

  function handleAddCatalogClick(event: MouseEvent) {
    openCatalogModal("Catalogue");
  }

  function handleAddLayerClick(event: MouseEvent) {
    openCatalogModal("Layer");
  }

  return (
    <>
      <nav className={styles.nav}>
        <MdArrowBackIos className={styles.backIcon} onClick={handleBackClick} />
        <MdLayers className={styles.icon} />
      </nav>
      <div className={styles.section}>
        <p className={styles.sectionTitle}>Datasets</p>
        <button
          className={`${styles.addButton} ${styles.addDataButton}`}
          onClick={handleAddCatalogClick}
        >
          + Add Catalog
        </button>
      </div>
      <div className={styles.section}>
        <p className={styles.sectionTitle}>Layers</p>
        <button
          className={`${styles.addButton} ${styles.addLayerButton}`}
          onClick={handleAddLayerClick}
        >
          + Add Layer
        </button>
      </div>
      <div className={styles.controls}>
        <label className={styles.label}>Layer Blending</label>
        <select className={styles.select}>
          <option value="normal">Normal</option>
        </select>
        <label className={styles.label}>Map Overlay Blending</label>
        <select className={styles.select}>
          <option value="normal">Normal</option>
        </select>
      </div>
    </>
  );
}

export default CatalogSideMenu;
