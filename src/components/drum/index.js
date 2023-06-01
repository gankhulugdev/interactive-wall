// import drumSet from '/drum-set.svg'
import { useContext, useEffect, useState } from 'react'
import { InteractiveWallContext } from '../../App'
import { scratches } from '../audio'
import './index.css'

export const Drum = ({ x, y }) => {
  const { isTurnedOn, setIsTurnedOn, currentScratchIndex } = useContext(InteractiveWallContext)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!isTurnedOn) setIsActive(false)
  }, [isTurnedOn])

  return (
    <div style={{ position: 'absolute', top: x, left: y }}>
      <svg
        className="drum-svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        viewBox="0 0 3000.0 3000.0"
        enableBackground="new 0 0 3000.0 3000.0"
      >
        {' '}
        <path
          fill="#FFFFFF"
          stroke="#000000"
          fillOpacity="1.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M789.19,1173.11C820.32,1014.67,1173.98,950.77,1579.11,1030.38C1984.23,1110.00,2287.41,1302.98,2256.27,1461.42C2225.13,1619.86,1871.47,1683.77,1466.35,1604.15C1061.23,1524.54,758.05,1331.55,789.19,1173.11z"
        />{' '}
        <path
          fill="#FFFFFF"
          stroke="#000000"
          fillOpacity="1.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M675.28,1930.08C707.41,1771.87,1061.47,1710.25,1466.08,1792.44C1870.69,1874.63,2172.64,2069.51,2140.50,2227.71C2108.36,2385.92,1754.31,2447.54,1349.70,2365.35C945.09,2283.16,643.14,2088.28,675.28,1930.08z"
        />{' '}
        <path
          fill="#060606"
          stroke="#000000"
          fillOpacity="1.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M728.79,1869.93C759.79,1712.19,1102.25,1646.68,1493.69,1723.60C1885.13,1800.53,2177.33,1990.76,2146.33,2148.51C2115.33,2306.25,1772.87,2371.77,1381.43,2294.84C989.99,2217.91,697.79,2027.68,728.79,1869.93z"
        />{' '}
        <path
          fill="#060606"
          stroke="#000000"
          fillOpacity="1.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M677.87,1948.94L788.93,1250.30"
        />{' '}
        <path
          fill="#060606"
          stroke="#000000"
          fillOpacity="1.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M2242.04,1521.41L2140.19,2221.63"
        />{' '}
        <path
          fill="#060606"
          stroke="#000000"
          fillOpacity="1.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M1226.55,1559.43C1333.37,1589.74,1440.19,1620.05,1441.19,1639.40C1442.19,1658.76,1337.37,1667.15,1341.33,1661.83C1345.29,1656.51,1458.03,1637.48,1572.55,1647.48C1687.08,1657.48,1803.39,1696.52,1923.54,1673.01C2043.70,1649.50,2167.70,1563.43,2208.69,1572.86C2249.68,1582.28,2207.66,1687.19,2188.00,1847.69C2168.33,2008.18,2171.03,2224.25,1908.93,2263.16C1646.83,2302.07,1119.94,2163.81,890.86,2018.63C661.78,1873.46,730.52,1721.37,761.14,1582.76C791.75,1444.14,784.25,1319.00,793.44,1287.68C802.62,1256.36,828.49,1318.86,860.74,1361.64C892.99,1404.43,931.62,1427.50,993.65,1457.18C1055.68,1486.86,1141.12,1523.15,1226.55,1559.43z"
        />{' '}
        <path
          fill="#919191"
          stroke="#7E7E7E"
          fillOpacity="0.004"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M1444.75,1666.65L1475.92,1673.10L1341.33,2323.84L1310.15,2317.40z"
        />{' '}
        <path
          fill="#919191"
          stroke="#7E7E7E"
          fillOpacity="0.004"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M2209.63,1567.76L2229.94,1571.15L2118.06,2241.58L2097.75,2238.19z"
        />{' '}
        <path
          fill="#919191"
          stroke="#7E7E7E"
          fillOpacity="0.004"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M815.11,1333.80L818.02,1334.26L708.55,2024.56L705.64,2024.09z"
        />{' '}
        <path
          fill="#8C8C8C"
          stroke="#7E7E7E"
          fillOpacity="0.996"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M2106.46,2228.22C2118.36,2228.22,2128.00,2237.13,2128.00,2248.13C2128.00,2259.13,2118.36,2268.05,2106.46,2268.05C2094.57,2268.05,2084.92,2259.13,2084.92,2248.13C2084.92,2237.13,2094.57,2228.22,2106.46,2228.22z"
        />{' '}
        <path
          fill="#8C8C8C"
          stroke="#7E7E7E"
          fillOpacity="0.996"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M2214.24,1547.32C2226.14,1547.32,2235.78,1556.24,2235.78,1567.24C2235.78,1578.24,2226.14,1587.16,2214.24,1587.16C2202.35,1587.16,2192.70,1578.24,2192.70,1567.24C2192.70,1556.24,2202.35,1547.32,2214.24,1547.32z"
        />{' '}
        <path
          fill="#8C8C8C"
          stroke="#7E7E7E"
          fillOpacity="0.996"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M1464.54,1637.48C1476.44,1637.48,1486.08,1646.40,1486.08,1657.40C1486.08,1668.40,1476.44,1677.31,1464.54,1677.31C1452.64,1677.31,1443.00,1668.40,1443.00,1657.40C1443.00,1646.40,1452.64,1637.48,1464.54,1637.48z"
        />{' '}
        <path
          fill="#8C8C8C"
          stroke="#7E7E7E"
          fillOpacity="0.996"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M1325.80,2306.07C1337.70,2306.07,1347.34,2314.99,1347.34,2325.99C1347.34,2336.99,1337.70,2345.90,1325.80,2345.90C1313.91,2345.90,1304.26,2336.99,1304.26,2325.99C1304.26,2314.99,1313.91,2306.07,1325.80,2306.07z"
        />{' '}
        <path
          fill="#8C8C8C"
          stroke="#7E7E7E"
          fillOpacity="0.996"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M818.02,1317.10C827.23,1317.10,834.70,1324.78,834.70,1334.26C834.70,1343.74,827.23,1351.42,818.02,1351.42C808.81,1351.42,801.34,1343.74,801.34,1334.26C801.34,1324.78,808.81,1317.10,818.02,1317.10z"
        />{' '}
        <path
          fill="#8C8C8C"
          stroke="#7E7E7E"
          fillOpacity="0.996"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M712.85,2004.61C722.07,2004.61,729.54,2012.29,729.54,2021.77C729.54,2031.24,722.07,2038.93,712.85,2038.93C703.64,2038.93,696.17,2031.24,696.17,2021.77C696.17,2012.29,703.64,2004.61,712.85,2004.61z"
        />{' '}
        <path
          fill="#FFFFFF"
          stroke="#FFFFFF"
          fillOpacity="0.016"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M888.62,1439.60C970.59,1486.10,1052.56,1532.60,1129.13,1566.42C1205.71,1600.24,1276.90,1621.38,1348.08,1642.53"
        />{' '}
        <path
          fill="#FFFFFF"
          stroke="#FFFFFF"
          fillOpacity="0.016"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M1548.32,1688.55C1630.07,1700.70,1711.83,1712.85,1804.85,1708.40C1897.88,1703.95,2002.17,1682.89,2106.46,1661.83"
        />{' '}
        <path
          fill="#707070"
          stroke="#020202"
          fillOpacity="0.988"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M1649.87,1069.44C1817.23,988.85,1984.60,908.25,2180.20,848.13C2375.79,788.01,2599.62,748.35,2675.46,743.48C2751.30,738.62,2679.17,768.54,2575.62,801.25C2472.08,833.96,2337.13,869.45,2206.46,909.98C2075.80,950.50,1949.42,996.05,1866.69,1035.21C1783.95,1074.37,1744.87,1107.13,1664.15,1141.52C1583.43,1175.91,1461.07,1211.92,1451.75,1200.17C1442.43,1188.43,1546.15,1128.94,1649.87,1069.44z"
        />{' '}
        <path
          fill="#707070"
          stroke="#020202"
          fillOpacity="0.988"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="49.753044"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M1738.35,1502.73C1890.81,1608.86,2043.26,1714.99,2191.77,1855.77C2340.27,1996.55,2484.83,2171.98,2526.35,2235.64C2567.87,2299.29,2506.35,2251.18,2426.96,2177.09C2347.58,2102.99,2250.34,2002.92,2150.82,1909.05C2051.30,1815.18,1949.51,1727.51,1874.74,1674.72C1799.97,1621.92,1752.23,1603.99,1682.60,1550.60C1612.98,1497.21,1521.47,1408.35,1527.12,1394.46C1532.76,1380.57,1635.56,1441.65,1738.35,1502.73z"
        />{' '}
        <path
          fill="#000000"
          stroke="#020202"
          fillOpacity="0.988"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="33.226997"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M1213.85,745.02C1242.25,745.02,1265.27,762.62,1265.27,784.33C1265.27,806.03,1242.25,823.63,1213.85,823.63C1185.46,823.63,1162.44,806.03,1162.44,784.33C1162.44,762.62,1185.46,745.02,1213.85,745.02z"
        />{' '}
        <path
          fill="#000000"
          stroke="#020202"
          fillOpacity="0.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="33.226997"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M1313.23,630.13C1295.60,620.24,1277.96,610.34,1265.98,601.79C1253.99,593.24,1247.66,586.03,1241.32,578.82L1261.19,771.01"
        />{' '}
        <path
          fill="#000000"
          stroke="#020202"
          fillOpacity="0.988"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="33.226997"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M1647.27,667.81C1675.66,667.81,1698.68,685.41,1698.68,707.12C1698.68,728.83,1675.66,746.43,1647.27,746.43C1618.87,746.43,1595.85,728.83,1595.85,707.12C1595.85,685.41,1618.87,667.81,1647.27,667.81z"
        />{' '}
        <path
          fill="#000000"
          stroke="#020202"
          fillOpacity="0.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="33.226997"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M1746.64,552.93C1729.01,543.03,1711.38,533.14,1699.39,524.59C1687.41,516.04,1681.07,508.82,1674.74,501.61L1694.61,693.80"
        />{' '}
        <path
          fill="#000000"
          stroke="#020202"
          fillOpacity="0.988"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="33.226997"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M744.92,528.62C773.32,528.62,796.33,546.22,796.33,567.93C796.33,589.64,773.32,607.24,744.92,607.24C716.53,607.24,693.51,589.64,693.51,567.93C693.51,546.22,716.53,528.62,744.92,528.62z"
        />{' '}
        <path
          fill="#000000"
          stroke="#020202"
          fillOpacity="0.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="33.226997"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M844.30,413.73C826.66,403.84,809.03,393.95,797.05,385.40C785.06,376.85,778.73,369.63,772.39,362.42L792.26,554.61"
        />{' '}
        <path
          fill="#000000"
          stroke="#020202"
          fillOpacity="0.988"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="33.226997"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M2208.52,482.84C2236.92,482.84,2259.93,500.43,2259.93,522.14C2259.93,543.85,2236.92,561.45,2208.52,561.45C2180.13,561.45,2157.11,543.85,2157.11,522.14C2157.11,500.43,2180.13,482.84,2208.52,482.84z"
        />{' '}
        <path
          fill="#000000"
          stroke="#020202"
          fillOpacity="0.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="33.226997"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M2307.90,367.95C2290.26,358.05,2272.63,348.16,2260.65,339.61C2248.66,331.06,2242.33,323.84,2235.99,316.63L2255.86,508.82"
        />{' '}
        <path
          fill="#000000"
          stroke="#020202"
          fillOpacity="0.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="33.226997"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M2380.77,1210.95C2477.71,1307.14,2574.66,1403.33,2590.54,1511.42C2606.41,1619.51,2541.22,1739.52,2476.02,1859.52"
        />{' '}
        <path
          fill="#000000"
          stroke="#020202"
          fillOpacity="0.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="33.226997"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M2675.19,1155.66C2772.13,1251.85,2869.08,1348.03,2884.96,1456.13C2900.83,1564.22,2835.64,1684.22,2770.44,1804.23"
        />{' '}
        <path
          fill="#000000"
          stroke="#020202"
          fillOpacity="0.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="33.226997"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M519.75,1835.31C454.26,1688.62,388.76,1541.93,417.26,1416.61C445.75,1291.29,568.24,1187.34,690.72,1083.39"
        />{' '}
        <path
          fill="#000000"
          stroke="#020202"
          fillOpacity="0.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="33.226997"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M247.25,1685.01C181.76,1538.31,116.26,1391.62,144.76,1266.30C173.25,1140.98,295.74,1037.04,418.23,933.09"
        />{' '}
      </svg>
    </div>
  )
}
