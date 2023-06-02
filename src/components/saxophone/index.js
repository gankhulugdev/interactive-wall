// import drumSet from '/drum-set.svg'
import { useContext, useEffect, useState } from 'react'
import { InteractiveWallContext } from '../../App'
import { scratches } from '../audio'
import './index.css'
import { SENSOR_ENUMS } from '../../enums'

export const Saxophone = ({ x, y }) => {
  const { ongoingInstruments } = useContext(InteractiveWallContext)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (ongoingInstruments.includes(SENSOR_ENUMS.Sax) && !isActive) {
      setIsActive(true)
    } else if (ongoingInstruments.length === 0) setIsActive(false)
  }, [ongoingInstruments])

  return (
    <div style={{ position: 'absolute', top: y, left: x }}>
      <svg
        className={`saxo-svg ${isActive ? 'active' : ''}`}
        xmlnsDc="http://purl.org/dc/elements/1.1/"
        xmlnsCc="http://creativecommons.org/ns#"
        xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlnsSvg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape"
        viewBox="0 0 116.72959 78.993713"
        id="svg2"
        version="1.1"
        inkscapeVersion="0.91 r13725"
        sodipodiDocname="Trompete-lineart.svg"
      >
        <title id="title5730">Trompete - lineart</title>
        <defs id="defs4">
          <pattern
            inkscapeCollect="always"
            xlinkHref="#Strips1_2"
            id="pattern5726"
            patternTransform="matrix(0.17701396,-0.07716594,0.00988782,0.02268207,198.71013,276.46447)"
          />
          <pattern
            inkscapeStockid="Stripes 1:2"
            id="Strips1_2"
            patternTransform="translate(0,0) scale(10,10)"
            height="1"
            width="3"
            patternUnits="userSpaceOnUse"
            inkscapeCollect="always"
          >
            <rect id="rect5021" height="2" width="1" y="-0.5" x="0" style={{ fill: 'black', stroke: 'none' }} />
          </pattern>
        </defs>
        <defs>
          <linearGradient id="sax-waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="##ffd35b">
              <animate
                attributeName="stop-color"
                // values="pink; yellow; white"
                values="#ffd35b; #ffba42; #fa5a201"
                dur="0.32s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#ffba42">
              <animate
                attributeName="stop-color"
                // values="yellow; white; pink"
                values="#ffba42; #fa5a201; #ffd35b"
                dur="0.32s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#fa5a201">
              <animate
                attributeName="stop-color"
                // values="white; pink;yellow"
                values="#fa5a201; #ffd35b; #ffba42"
                dur="0.32s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <g inkscapeLabel="Ebene 1" inkscapeGroupmode="layer" id="layer1" transform="translate(-139.19103,-264.80471)">
          <path
            style={{
              fill: isActive ? 'url(#sax-waveGradient)' : '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.77165353',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1"',
            }}
            d="m 237.15643,276.4026 c -1.71861,1.92713 -11.7046,8.93785 -18.94348,11.75803 -11.54302,4.49702 -27.18048,8.97764 -40.7176,13.79603 -6.42337,2.28633 -14.89512,5.5428 -20.03219,9.50227 -4.17018,3.21423 -4.70788,11.296 -2.83063,16.54833 1.93482,5.41341 6.86582,9.42752 10.01609,10.45157 4.589,1.49173 6.38992,0.83427 8.49191,0.43549 17.94095,-3.40364 34.61714,-6.61509 52.9111,-11.97577 2.97552,-0.87192 6.21545,-2.36626 7.83868,-5.00805 2.29118,-3.72889 2.15161,-8.77031 1.30645,-13.06447 -0.50788,-2.58047 -1.65026,-5.32188 -3.7016,-6.96771 -2.76065,-2.21493 -6.72193,-3.09211 -10.23384,-2.65207 -2.90311,0.36375 -5.04133,2.79569 -7.62094,4.17626 -1.71709,0.91896 -3.33881,2.13103 -5.22579,2.61289 -17.25432,4.40612 -46.87681,11.02689 -48.8169,11.61217 -0.37335,1.24834 -0.72816,2.64778 -0.47739,3.35113 16.88131,-4.37014 36.40465,-7.4959 52.56041,-12.32851 3.24677,-0.9712 4.40472,-1.96213 6.33177,-3.48387 1.63013,-1.99973 6.46184,-2.96987 9.78108,-1.0887 2.25266,1.41974 2.68426,3.43196 3.48386,6.07486 0.71186,2.35288 0.3495,6.55535 -0.43548,8.27417 -1.18452,2.59366 -3.26907,3.91555 -7.438,5.02992 -16.78819,4.48755 -32.78314,7.38861 -49.17471,11.08292 -3.87525,0.8734 -7.27494,1.36347 -11.32254,-3.7016 -2.50957,-3.14041 -4.48252,-6.71906 -3.88017,-11.02645 0.4429,-3.16721 0.80654,-5.88477 9.3237,-9.00573 4.05713,-1.48666 24.30827,-5.89081 36.58052,-8.27417 8.87875,-1.72431 17.74262,-4.05129 26.78216,-4.35482 3.86166,-0.12967 11.54028,1.0887 11.54028,1.0887 -3.88159,-6.95797 -5.69923,-11.97242 -6.09675,-22.86282 z"
            id="path4147"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="csssssssssssssccsccssssssssscc"
          />
          <path
            style={{
              fill: isActive ? 'url(#sax-waveGradient)' : '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.77165353',
              strokeLinecap: 'butt',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 153.54528,319.0861 -4.67218,1.24234 c 0.16381,0.58024 0.52503,2.41516 0.45726,3.22698 l 4.15179,-1.14858 z"
            id="path4168"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="ccccc"
          />
          <path
            style={{
              fill: isActive ? 'url(#sax-waveGradient)' : '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.77165353',
              strokeLinecap: 'butt',
              strokeLinejoin: 'round',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 149.1288,321.74486 c -0.57925,-3.14534 -0.98214,-1.33929 -0.98214,-1.33929 l -2.63392,0 c 0.91156,1.18389 1.19935,2.83561 1.16071,4.73215 l 2.23214,-1.29465 c 0,0 0.94589,1.82597 0.22321,-2.09821 z"
            id="path4170"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="sccccs"
          />
          <path
            style={{
              color: '#000000',
              display: 'inline',
              overflow: 'visible',
              visibility: 'visible',
              opacity: '1',
              fill: isActive ? 'url(#sax-waveGradient)' : '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.77165353',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeDashoffset: '0',
              strokeOpacity: '1',
              marker: 'none',
              enableBackground: 'accumulate',
            }}
            d="m 146.43752,322.985 a 2.9851362,1.3670548 79.697319 0 1 -0.89376,3.0588 2.9851362,1.3670548 79.697319 0 1 -1.84103,-2.83114 2.9851362,1.3670548 79.697319 0 1 0.89377,-3.0588 2.9851362,1.3670548 79.697319 0 1 1.84102,2.83114 z"
            id="path4172"
            inkscapeConnector-curvature="0"
          />
          <path
            style={{
              fill: '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.77165353',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 238.66072,288.34434 c -1.50538,-5.84734 -1.46746,-10.01621 -1.51786,-15.35714 -0.0139,-1.47006 0.85554,-3.86158 2.32143,-3.75 4.05084,0.30834 7.53183,8.8441 9.64285,14.28572 1.79087,4.61637 2.62037,11.40686 2.32143,15.08928 -0.17657,2.17505 -0.29003,4.23962 -1.33928,4.73215 -1.97611,0.9276 -4.16689,-1.41111 -5.625,-3.03572 -2.68756,-2.99445 -4.6526,-7.49359 -5.80357,-11.96429 z"
            id="path4175"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="ssssssss"
          />
          <path
            style={{
              fill: isActive ? 'url(#drumWaveGradient2)' : '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: 'none',
              strokeWidth: '1px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: '1',
            }}
            d="m 238.48215,277.09435 c 3.89264,0.835 7.22436,6.8626 7.32142,7.41071 0,0 1.80839,5.56447 1.51786,8.57143 -0.12711,1.31552 -1.51786,2.67857 -1.51786,2.67857 -0.92535,0.66786 -1.98912,1.13799 -4.55357,-0.53571 -1.3377,-3.18875 -2.82414,-5.98087 -3.48214,-10.98215 -0.30267,-2.30052 -0.87199,-7.48803 0.71429,-7.14285 z"
            id="path4288"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cssccsc"
          />
          <path
            style={{
              fill: isActive ? 'url(#drumWaveGradient2)' : '#000',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.0629921',
              strokeLinecap: 'round',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 238.03571,277.27292 c 0.55446,-0.99802 6.2076,2.26708 8.12501,8.39285 2.47732,7.91461 -0.0893,9.91072 -0.0893,9.91072"
            id="path4177"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="csc"
          />
          <path
            style={{
              fill: isActive ? 'url(#drumWaveGradient2)' : '#000',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '0.99921262',
              strokeLinecap: 'round',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 230.08929,285.39792 c -10.52086,5.57142 -22.58795,10.52435 -37.85715,14.19643"
            id="path4179"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cc"
          />
          <path
            style={{
              fill: 'none',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1px',
              strokeLinecap: 'round',
              strokeLinejoin: 'miter',
              strokeOpacity: '1',
            }}
            d="m 155.81603,317.22369 c -1.18174,3.5414 -0.2262,6.68206 1.26269,9.72272"
            id="path4181"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cc"
          />
          <path
            style={{
              fill: isActive ? 'url(#drumWaveGradient2)' : '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: '1',
            }}
            d="m 183.97403,327.00954 34.9134,-7.51301 c 1.83121,-0.60339 1.44169,-2.78146 -0.82075,-2.58851 l -12.2481,2.33597 c -2.21282,0.3625 -2.83468,-0.72132 -3.21986,-2.0203 l -0.56821,-2.52538 -2.14657,0.44194 0.82074,6.06091 c 0.25268,1.39694 -0.6262,2.08665 -1.70463,2.65165 l -3.78807,0.75762 c -1.20646,0.0419 -2.31359,-0.0652 -2.52538,-1.51523 l -1.19956,-5.87151 c -0.43586,-0.96832 -1.05842,-1.28316 -1.8309,-1.07329 -1.37794,0.30014 -1.45318,1.25163 -1.51523,2.20971 l 1.76777,7.38674 -4.29315,0.88388 -1.57836,-8.01808 2.71478,-0.44194 c 0.3626,-1.1746 0.19287,-2.39357 2.46225,-3.40927 1.76319,-0.88571 3.45583,-0.50143 5.05076,1.6415 l 0.75762,3.15673 c 0.67393,1.68442 2.58352,1.51429 2.58851,-0.56821 l -1.45209,-6.43973 5.87151,-1.38896 c 1.44999,-0.64188 1.99288,0.66004 2.27284,2.52538 0.23713,2.48229 1.6421,1.85036 2.84106,1.76777 l 11.04854,-1.57836 c 0,0 4.83587,-0.66225 5.55584,3.09359 0.71169,3.71265 -4.10375,4.73509 -4.10375,4.73509 -11.17928,3.15375 -23.35919,5.64041 -35.03966,8.46003 0,0 -2.13709,0.3799 -2.46225,-1.07329 -0.38066,-1.70122 1.8309,-2.08344 1.8309,-2.08344 z"
            id="path4183"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cccccccccccccccccccccccccccsccsc"
          />
          <path
            style={{
              fill: isActive ? 'url(#drumWaveGradient2)' : '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.0629921',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 184.85792,312.93054 c 1.47351,-0.42849 3.77955,0.49023 4.23001,1.95717 0.45981,1.49739 -1.09097,3.20254 -2.58852,3.6618 -1.51208,0.46372 -3.85208,-0.50146 -4.29315,-2.0203 -0.43798,-1.50818 1.14364,-3.16014 2.65166,-3.59867 z"
            id="path4185"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="sssss"
          />
          <path
            style={{
              fill: isActive ? 'url(#drumWaveGradient2)' : '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.0629921',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 191.95636,311.50437 c 1.49852,-0.3306 2.93541,0.0837 3.283,1.57836 0.33354,1.43426 -0.20709,3.13941 -1.70464,3.59867 -1.51208,0.46372 -3.48421,-0.48188 -3.85121,-2.0203 -0.37484,-1.57131 1.14364,-2.9076 2.27285,-3.15673 z"
            id="path4185-4"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="sssss"
          />
          <path
            style={{
              fill: isActive ? 'url(#drumWaveGradient2)' : '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.0629921',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 198.45922,309.86287 c 1.47351,-0.42849 3.1482,0.49023 3.59866,1.95717 0.45981,1.49739 -0.77529,3.20254 -2.27284,3.6618 -1.51208,0.46372 -3.53641,-0.50146 -3.97748,-2.0203 -0.43798,-1.50818 1.14364,-3.16014 2.65166,-3.59867 z"
            id="path4185-5"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="sssss"
          />
          <path
            style={{
              fill: isActive ? 'url(#drumWaveGradient2)' : '#000',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.0629921',
              strokeLinecap: 'round',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 185.42613,319.18086 0.94702,3.85121"
            id="path4208"
            inkscapeConnector-curvature="0"
          />
          <path
            style={{
              fill: isActive ? 'url(#drumWaveGradient2)' : '#000',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.0629921',
              strokeLinecap: 'round',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 185.99434,314.1301 c 1.18,0.23815 2.26034,2.93426 -0.0631,3.09359"
            id="path4210"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cc"
          />
          <path
            style={{
              fill: 'none',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1px',
              strokeLinecap: 'round',
              strokeLinejoin: 'miter',
              strokeOpacity: '1',
            }}
            d="m 192.32005,313.15197 c 0.80119,0.11188 1.69213,0.97709 0.94705,1.89403"
            id="path4210-4"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cc"
          />
          <path
            style={{
              fill: 'none',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1px',
              strokeLinecap: 'round',
              strokeLinejoin: 'miter',
              strokeOpacity: '1',
            }}
            d="m 199.53644,311.22365 c 0.80119,0.11188 1.69213,0.97709 0.94705,1.89403"
            id="path4210-4-3"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cc"
          />
          <path
            style={{
              fill: isActive ? 'url(#drumWaveGradient2)' : '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.0629921',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 187.50957,324.10535 c -0.90152,0.78624 -0.62727,1.76845 -0.56821,2.71479 0.23899,1.16247 0.25377,2.17545 1.45209,3.97747 0,0 -0.70494,1.34224 -0.44194,1.95717 0.33778,0.78978 1.35509,1.41224 2.20971,1.32583 1.02254,-0.10339 2.18599,-1.05936 2.27284,-2.08344 0.11028,-1.30028 -2.39911,-3.09359 -2.39911,-3.09359 -0.52807,-0.53755 -0.92145,-1.25469 -0.94702,-2.46225 0.21045,-0.19931 0.4209,-0.47641 0.63135,-1.01015 0.0763,-1.12063 -0.34099,-1.25416 -0.75762,-1.38896 -0.69742,-0.0856 -1.41042,-0.17909 -1.45209,0.0631 z"
            id="path4242"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cccssscccccc"
          />
          <path
            style={{
              fill: isActive ? 'url(#drumWaveGradient2)' : '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.0629921',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 192.60742,323.10083 c -0.77914,0.76666 -0.98406,1.66127 -0.93302,2.58403 0.20655,1.13352 0.66127,2.18439 1.69692,3.94152 0,0 -0.60925,1.30881 -0.38195,1.90842 0.29193,0.7701 1.17115,1.37706 1.90976,1.2928 0.88373,-0.10081 1.88925,-1.03297 1.96431,-2.03154 0.0953,-1.26789 -2.07344,-3.01653 -2.07344,-3.01653 -0.45639,-0.52416 -0.79637,-1.22343 -0.81847,-2.40091 0.18188,-0.19434 0.36377,-0.46454 0.54565,-0.98499 0.0659,-1.09271 -0.2947,-1.22291 -0.65478,-1.35436 -0.60275,-0.0835 -1.25498,-0.17735 -1.25498,0.0615 z"
            id="path4242-0"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cccsssccccsc"
          />
          <path
            style={{
              fill: isActive ? 'url(#drumWaveGradient2)' : '#000',
              fillOpacity: '1',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.0629921',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 196.88179,322.59961 c -0.84033,0.78624 -0.3953,1.38964 -0.34024,2.33598 0.22277,1.16247 0.23654,2.17545 1.35353,3.97747 0,0 -0.65709,1.34224 -0.41194,1.95717 0.31485,0.78978 1.26311,1.41224 2.05973,1.32583 0.95314,-0.10339 2.03762,-1.05936 2.11858,-2.08344 0.10279,-1.30028 -2.23628,-3.09359 -2.23628,-3.09359 -0.49223,-0.53755 -0.73264,-1.12842 -0.75648,-2.33598 0.0699,-0.32558 0.3292,-0.66581 0.27283,-1.01015 0.13423,-0.42615 -0.12844,-0.74908 -0.5168,-1.19956 -0.49889,-0.13025 -1.00724,0.16274 -1.54293,0.12627 z"
            id="path4242-4"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cccsssccccc"
          />
          <path
            style={{
              fill: 'none',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.0629921',
              strokeLinecap: 'round',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 188.26718,331.05015 c 0.24807,-0.89732 0.36888,-1.22936 0.94702,-1.13642"
            id="path4265"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cc"
          />
          <path
            style={{
              fill: 'none',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.0629921',
              strokeLinecap: 'round',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 193.1574,330.1703 c 0.18494,-0.45538 0.62142,-1.03996 1.01015,-1.26269"
            id="path4265-1"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cc"
          />
          <path
            style={{
              fill: 'none',
              fillRule: 'evenodd',
              stroke: '#000000',
              strokeWidth: '1.0629921',
              strokeLinecap: 'round',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            d="m 197.82935,329.09701 c 0.18494,-0.45538 0.43201,-0.78742 1.01015,-0.88388"
            id="path4265-2"
            inkscapeConnector-curvature="0"
            sodipodiNodetypes="cc"
          />
        </g>
      </svg>
    </div>
  )
}
