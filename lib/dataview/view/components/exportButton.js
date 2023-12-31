import React from 'react'
import { Button } from 'primereact/button'
import { OverlayPanel } from 'primereact/overlaypanel'
import {
  exportCSV,
  exportPdf,
  exportExcel
} from '../../controller/DataviewExport'

/**
 * Dataview header export button
 *
 * @param {Object} optionsExport
 * @param {Object} dataTableRef
 * @param {Array} results
 * @param {String[]} exportColumns
 * @param {Object} exportOverPanelRef
 *
 * @returns {JSX.Element}
 */
const exportButton = (optionsExport, dataTableRef, results, exportColumns, exportOverPanelRef, deviceSize) => {

  const getLabel = () => {
    if (deviceSize.width <= 480) {
      return ''
    } else {
      return optionsExport.label
    }
  }

  const extensions = optionsExport.extensions
  return (
    <React.Fragment>
      <Button
        type={optionsExport.type}
        className={optionsExport.className}
        size={optionsExport.size}
        severity={optionsExport.severity}
        icon={optionsExport.icon}
        label={getLabel()}
        style={optionsExport.style}
        onClick={(e) => exportOverPanelRef.current.toggle(e)} />
      <OverlayPanel ref={exportOverPanelRef}>
        {
          (extensions.includes('xlsx')) ? (
            <div className='mb-1'>
              <Button
                type={optionsExport.xlsx.type}
                className={optionsExport.xlsx.className}
                size={optionsExport.xlsx.size}
                severity={optionsExport.xlsx.severity}
                label={optionsExport.xlsx.label}
                icon={optionsExport.xlsx.icon}
                style={optionsExport.xlsx.style}
                onClick={() => {
                  exportExcel(results, optionsExport.fileName, exportColumns)
                }} />
            </div>
          ) : ''
        }
        {
          (extensions.includes('pdf')) ? (
            <div className='mb-1'>
              <Button
                type={optionsExport.pdf.type}
                className={optionsExport.pdf.className}
                size={optionsExport.pdf.size}
                severity={optionsExport.pdf.severity}
                label={optionsExport.pdf.label}
                icon={optionsExport.pdf.icon}
                style={optionsExport.pdf.style}
                onClick={() => {
                  exportPdf(results, optionsExport.fileName, exportColumns)
                }} />
            </div>
          ) : ''
        }
        {
          (extensions.includes('csv')) ? (
            <div className='mb-1'>
              <Button
                type={optionsExport.csv.type}
                className={optionsExport.csv.className}
                size={optionsExport.csv.size}
                severity={optionsExport.csv.severity}
                label={optionsExport.csv.label}
                icon={optionsExport.csv.icon}
                style={optionsExport.csv.style}
                onClick={() => {
                  exportCSV(results, optionsExport.fileName, exportColumns)
                }} />
            </div>
          ) : ''
        }
      </OverlayPanel>
    </React.Fragment>
  )
}

export default exportButton
