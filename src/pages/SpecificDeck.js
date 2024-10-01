import React, { useContext, useEffect, useState } from 'react'
import "../styles.css"
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import "../comp-styles.css"
import { MainContext } from '../context/MainContext'
import settings from "../assets/settings.png"
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import user from "../assets/user.png"
import Card from '../components/Card'
import { reduceDeckData } from '../utils/reduceDeckData'
import { DeckDashboardPageDiv } from '../components/DeckModal'
import {specificDeviceChartData} from "../assets/info"
import jsPDF from 'jspdf';


const SpecificDeck = () => {
    const {deck} = useParams()
    const {isLogin, deckData, deviceInfo, setfilteredDeckInfo} = useContext(MainContext)
    const [deckInfo, setDeckInfo] = useState([])
    const [deckGrid, setDeckGrid] = useState([])
    const [downloadData, setDownloadData] = useState([])

    const handleDownloadData = () => {
      const details = deckInfo.flatMap((item, index) => {
        return deviceInfo.filter(
          data => data.deck === parseInt(deck) && data.compartment === item.comp && !data.status.includes("success")
        );
      });
    
      const data = details.map(data => {
        return specificDeviceChartData.filter(item => item.node_name === data.node_name);
      }).flat(); 
    
      setDownloadData(data); 
      const doc = new jsPDF();
    
      data.forEach((deviceData, index) => {
        const node = deviceData; 
    
        doc.setFont('helvetica', 'bold');
        
        doc.text(`Node Name: ${node.node_name}`, 10, 10 + (index * 60)); 
        doc.text(`Deck: ${node.deck}`, 10, 20 + (index * 60)); 
        doc.text(`Compartment: ${node.comp}`, 10, 30 + (index * 60)); 
    
        doc.setFont('helvetica', 'normal');
        
        if (node.alertlogstemp && node.alertlogstemp.length > 0) {
          doc.text('Temperature Alerts:', 10, 40 + (index * 60));
    
          node.alertlogstemp.forEach((log, logIndex) => {
            doc.text(`${log.time}: ${log.message}`, 10, 50 + (index * 60) + (logIndex * 10));
          });
        }
    
        if (node.alertlogsbattery && node.alertlogsbattery.length > 0) {
          doc.text('Battery Alerts:', 10, 50 + (index * 60) + (node.alertlogstemp ? node.alertlogstemp.length * 10 : 0));
    
          node.alertlogsbattery.forEach((log, logIndex) => {
            doc.text(`${log.time}: ${log.message}`, 10, 60 + (index * 60) + (logIndex * 10));
          });
        }
    
        // new node on new page
        if (index < data.length - 1) {
          doc.addPage();
        }
      });
      doc.save('downloadData.pdf');
    };

    useEffect(() => {
      const filtered = deckData.filter(item => item.deck === parseInt(deck)).flatMap(item => {
      const arr = [];
      item.devices.forEach(data => {
        const sortedNodeInfo = data.node_info.sort((a, b) => {
          const statusOrder = { danger: 1, orange: 2, yellow: 3, deleted: 4, success: 5};
          return statusOrder[a.status] - statusOrder[b.status];
        });

        if (sortedNodeInfo.some(info => info.status.includes("deleted"))) {
          arr.unshift({ ...data, node_info: sortedNodeInfo });
        } else if (sortedNodeInfo.some(info => info.status.includes("yellow"))) {
          arr.unshift({ ...data, node_info: sortedNodeInfo });
        } else if (sortedNodeInfo.some(info => info.status.includes("orange"))) {
          arr.unshift({ ...data, node_info: sortedNodeInfo });
        } else if (sortedNodeInfo.some(info => info.status.includes("danger"))) {
          arr.unshift({ ...data, node_info: sortedNodeInfo });
        } else {
          arr.push({ ...data, node_info: sortedNodeInfo });
        }
        });

        return arr;
      });

      console.log(filtered, "final filtered output", deckData);
      setDeckInfo(filtered)
      const { filteredDeckInfo, cardData } = reduceDeckData(deckData, deviceInfo);
      setfilteredDeckInfo(filteredDeckInfo);
      const data = filteredDeckInfo.filter(item => item.deck === parseInt(deck))
      setDeckGrid(data[0])
    }, [deckData, deviceInfo])


  return (
    <div className='specific-deck-wrapper'>
  <div style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
  <div className='specific-device-mainheader'>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "auto"}}>
            <img style={{height: "100px"}} src={shipcrest} alt="ship" />
            <h1 id="dashboard-heading">Ship Name</h1>
        </div>
        <div className='specific-device-imgWrapper'>
            <Link to="/" className='link'><h6 className='login'>Dashboard</h6></Link>
            {isLogin ? <img src={user} alt="user-img" className='img' style={{marginRight: "20px", marginTop: "3px"}} /> : <Link to="/login" className='link'><h6 className='login'>Login</h6></Link>}
            <Link to={isLogin ? "/settings" : "#"} 
             style={{ pointerEvents: isLogin ? 'auto' : 'none', opacity: isLogin ? 1 : 0.5 }}><img src={settings} alt="settings" className='img'/></Link>
        </div>
      </div>
     <div style={{display: "flex", flexDirection: "column", justifyContent:"space-evenly", margin:"auto", alignItems: "center"}}>
      <h4 className="h4">Deck - {deck} </h4>
      <button id="download-report" onClick={handleDownloadData}>Download</button>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-evenly", width: "96%" }}>
        <DeckDashboardPageDiv data={deckGrid} deckNo={deckGrid.deck} param={"deck"}/>
        <div className='card-holder-specificdeck'>
            {deckInfo.some(item => deviceInfo.some(data => data.deck === parseInt(deck) && data.compartment === item.comp && !data.status.includes("success"))) ? (
              // Map over deckInfo to render compartments with issues
              deckInfo.map((item, index) => {
                const details = deviceInfo.filter(
                  data => data.deck === parseInt(deck) && data.compartment === item.comp && !data.status.includes("success")
                );

                return (
                  details.length > 0 && (
                    <div className='specific-card' key={index}>
                      <h3>Compartment No. - {item.comp}</h3>
                      {details.map(detail => (
                        <Link className='link-style' to={`/info/${detail.node_name}`} key={detail.id}>
                          <Card item={detail} />
                        </Link>
                      ))}
                    </div>
                  )
                );
              })
            ) : (
              <div className='working-fine-div'>Everything is working fine</div>
            )
          }
        </div>
      </div>
          <hr style={{width: "98%", margin: "25px 0 20px 0"}}></hr>
      <div className='card-holder-specificdeck'>
        {deckInfo.map((item, index) => {
          const details = deviceInfo.filter(data => (data.deck === parseInt(deck) && data.compartment === item.comp)).filter(item => item.status.includes("success"))
          return(
            details.map(detail => {
              console.log(item, "item check", detail)
              return (
              <div className='specific-card'>
                <h3>Compartment No. - {item.comp}</h3>
                <Link className='link-style' to={`/info/${detail.node_name}`}><Card item={detail} key={index} /></Link>
              </div>
              )
            })
          )
        })}
      </div>
     </div>
  </div>
      <div className="dashboard-sticky">    
        <Footer />
      </div>
    </div>
  )
}

export default SpecificDeck
