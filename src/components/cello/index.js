// import drumSet from '/drum-set.svg'
import { useContext, useEffect, useState } from 'react'
import './index.css'
import { InteractiveWallContext } from '../../App'
import { SENSOR_ENUMS } from '../../enums'

export const Cello = ({ x, y }) => {
  const [isActive, setIsActive] = useState(false)
  const { ongoingInstruments } = useContext(InteractiveWallContext)

  useEffect(() => {
    if (ongoingInstruments.includes(SENSOR_ENUMS.Guitar) && !isActive) {
      setIsActive(true)
    } else if (ongoingInstruments.length === 0) setIsActive(false)
  }, [ongoingInstruments])

  return (
    <div style={{ position: 'absolute', top: y, left: x }}>
      <svg
        className={`cello-svg ${isActive ? 'active' : ''}`}
        xmlnsdc="http://purl.org/dc/elements/1.1/"
        xmlnscc="http://creativecommons.org/ns#"
        xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlnssvg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnssodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlnsinkscape="http://www.inkscape.org/namespaces/inkscape"
        version="1.1"
        id="svg815"
        xmlSpace="preserve"
        width="880"
        height="880"
        viewBox="0 0 880 880"
        sodipodidocname="violin-silhouette-freesvg.org.svg"
        inkscapeversion="0.92.4 (5da689c313, 2019-01-14)"
      >
        {' '}
        <defs>
          <linearGradient id="celloWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#pink">
              <animate
                attributeName="stop-color"
                values="pink; yellow; white"
                dur="0.765s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#yellow">
              <animate
                attributeName="stop-color"
                values="yellow; white; pink"
                dur="0.765s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#white">
              <animate
                attributeName="stop-color"
                values="white; pink;yellow"
                dur="0.765s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <g
          id="g823"
          inkscapegroupmode="layer"
          inkscapelabel="violin-silhouette-freesvg.org"
          transform="matrix(1.3333333,0,0,-1.3333333,0,880)"
        >
          <path
            d="m 273.007,215.339 c 0,-3.968 -0.37,-8.031 4.304,-9.732 2.58,-0.94 5.476,-0.164 7.243,1.942 1.767,2.105 2.028,5.091 0.653,7.472 -2.274,3.941 -6.501,6.806 -11.031,6.37 -34.287,-3.287 -5.758,-65.217 -38.154,-77.108 0.749,6.224 -6.172,11.986 -11.802,8.429 -1.866,-1.18 -2.887,-3.33 -2.622,-5.522 0.377,-3.13 2.206,-5.901 4.938,-7.477 2.73,-1.578 6.046,-1.776 8.945,-0.537 40.73,17.394 11.59,69.531 37.526,76.163 m 82.977,0 c 25.933,-6.632 -3.205,-58.769 37.526,-76.163 2.901,-1.239 6.215,-1.041 8.945,0.537 2.733,1.576 4.561,4.347 4.939,7.477 0.264,2.192 -0.758,4.342 -2.623,5.522 -5.627,3.557 -12.552,-2.205 -11.802,-8.429 -32.396,11.891 -3.867,73.821 -38.154,77.108 -4.531,0.436 -8.756,-2.429 -11.032,-6.37 -1.373,-2.381 -1.113,-5.367 0.654,-7.472 1.767,-2.106 4.661,-2.882 7.245,-1.942 4.672,1.701 4.302,5.764 4.302,9.732 M 297.836,41.98 c -15.54,41.963 -52.193,74.532 -94.112,39.756 47.35,6.784 65.73,-6.314 94.112,-39.756 M 310.87,563.398 V 214.553 h -4.604 v 348.845 h -1.325 V 214.553 h -4.794 v -5.38 h 4.794 v -65.31 h 1.325 v 65.31 h 4.604 v -65.31 h 1.323 v 65.31 h 4.605 v -65.31 h 1.324 v 65.31 h 4.605 v -65.31 h 1.323 v 65.31 h 4.793 v 5.38 h -4.793 v 348.845 h -1.323 V 214.553 h -4.605 v 348.845 h -1.324 V 214.553 h -4.605 V 563.398 Z M 299.253,138.785 307.92,22.813 h 13.151 l 8.669,115.972 z M 309.749,16.501 v -2.167 c 0,-2.384 1.952,-4.334 4.335,-4.334 h 0.822 c 2.384,0 4.333,1.95 4.333,4.334 v 2.167 z M 497.382,632.08 h -6.617 V 93.817 h 6.617 z m -18.527,19.888 h 5.955 5.955 12.45 V 632.08 h -2.46 V 93.817 h 2.903 V 10 h -12.893 -5.955 -5.955 z m -151.419,-87.801 1.64,-135.487 c 0.257,-21.23 18.512,-34.339 39.08,-46.403 25.903,-15.195 38.566,-44.033 32.226,-73.385 -0.852,-3.954 -0.932,-4.326 -1.786,-8.279 8.169,-3.917 4.342,-12.879 -4.96,-14.208 -29.837,-4.264 -11.687,-81.925 13.452,-76.067 14.261,3.321 16.841,-10.833 6.275,-15.992 60.899,-94.25 30.931,-186.11 -98.868,-175.15 -129.796,-10.96 -159.763,80.9 -98.866,175.15 -10.564,5.159 -7.985,19.313 6.276,15.992 25.139,-5.858 43.286,71.803 13.45,76.067 -9.3,1.329 -13.129,10.291 -4.958,14.208 -0.854,3.953 -0.937,4.325 -1.789,8.279 -6.339,29.352 6.325,58.19 32.226,73.385 20.569,12.064 38.826,25.173 39.081,46.403 l 1.679,138.702 h -6.677 l 1.524,18.215 h -9.945 v -0.262 c 0,-2.876 -2.353,-5.23 -5.231,-5.23 -2.876,0 -5.23,2.354 -5.23,5.23 v 4.485 c 0,2.877 2.354,5.23 5.23,5.23 2.878,0 5.231,-2.353 5.231,-5.23 v -0.262 h 9.447 l 0.58,-2.973 3.115,37.27 h -10.001 v -0.261 c 0,-2.876 -2.355,-5.23 -5.232,-5.23 h -0.002 c -2.877,0 -5.23,2.354 -5.23,5.23 v 4.484 c 0,2.877 2.353,5.231 5.23,5.231 h 0.002 c 2.877,0 5.232,-2.354 5.232,-5.231 v -0.261 h 9.445 l 0.619,-3.183 2.284,27.334 h 25.021 l 1.626,-19.487 0.483,2.471 h 9.448 v 0.261 c 0,2.877 2.352,5.231 5.228,5.231 h 0.003 c 2.875,0 5.229,-2.354 5.229,-5.231 v -4.484 c 0,-2.876 -2.354,-5.23 -5.229,-5.23 h -0.003 c -2.876,0 -5.228,2.354 -5.228,5.23 v 0.262 h -9.806 l 3.055,-36.557 0.442,2.26 h 9.445 v 0.261 c 0,2.877 2.355,5.23 5.232,5.23 2.877,0 5.229,-2.353 5.229,-5.23 v -4.484 c 0,-2.877 -2.352,-5.231 -5.229,-5.231 -2.877,0 -5.232,2.354 -5.232,5.231 v 0.262 h -9.745 l 2.119,-25.351 h -30.866 z"
            style={{ stroke: 'ThreeDHighlight' ,}}
            fill={isActive ? 'url(#celloWaveGradient)' : '#000'}
            id="path925"
            inkscapeconnector-curvature="0"
          />
        </g>
      </svg>
    </div>
  )
}
