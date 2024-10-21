/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import "../styles.css"
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import "../comp-styles.css"
import { MainContext } from '../context/MainContext'
import settings from "../assets/settings.png"
import settingsLight from "../assets/settingsLight.png"
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import sun from "../assets/sun.png"
import moon from "../assets/moon.png"
import Card from '../components/Card'
import { reduceDeckData } from '../utils/reduceDeckData'
import { DeckDashboardPageDiv } from '../components/DeckModal'
import {specificDeviceChartData} from "../assets/info"
import { handleDownloadData } from '../utils/ExportPdfButton'
import UserDowndown from '../components/UserDowndown'


const SpecificDeck = () => {
    const {deck} = useParams()
    const {isLogin, deckData, deviceInfo, setfilteredDeckInfo, theme, setIsLogin, setTheme} = useContext(MainContext)
    const [deckInfo, setDeckInfo] = useState([])
    const [deckGrid, setDeckGrid] = useState([])

    const handleThemeChange =  () => {
      if(theme==="dark") {
          setTheme("light")
          document.body.classList.add('light');
      } else {
          setTheme("dark")
          document.body.classList.remove('light');
      }
    }

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
      const { filteredDeckInfo } = reduceDeckData(deckData, deviceInfo);
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
        <Link to={isLogin ? "/settings" : "#"} 
             style={{ pointerEvents: isLogin ? 'auto' : 'none', opacity: isLogin ? 1 : 0.5, marginRight: "10px" }}><img src={theme === "dark" ? settings: settingsLight} alt="settings" className='img'/></Link>
            <Link to="/" className='link'><h6 className='login' style={{marginRight: "10px"}}>Dashboard</h6></Link>
            <UserDowndown theme={theme} setIsLogin = {setIsLogin} />
           
        </div>
        <div className="theme" style={{ position: 'absolute', top: "6px", right: "30px"}}><button onClick={handleThemeChange} style={{border: `${theme === "dark"? "1px solid #fff" : "1px solid #000"}`}}><img src={theme==="dark" ? sun : moon} style={{ filter: `${theme === "dark" ? "brightness(0) invert(1)": "grayscale(100%)"}`}} alt="theme-icon" /></button></div>
      </div>
     <div style={{display: "flex", flexDirection: "column", justifyContent:"space-evenly", margin:"auto", alignItems: "center"}}>
      <h4 className="h4">Deck - {deck} </h4>
      <button id="download-report" onClick={() => handleDownloadData(specificDeviceChartData, deviceInfo, deckInfo, deck)}>Generate Report</button>
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
                      <div className='specific-card-div'>
                      {details.map(detail => (                     
                         <Link className='link-style' to={`/info/${detail.node_name}`} key={detail.id}>
                          <Card item={detail} />
                        </Link>
                      ))}
                      </div>
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
                <div className='specific-card-div'><Link className='link-style' to={`/info/${detail.node_name}`}><Card item={detail} key={index} /></Link></div>
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
