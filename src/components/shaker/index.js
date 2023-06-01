// import drumSet from '/drum-set.svg'
import { useContext, useEffect, useState } from 'react'
import { scratches } from '../audio'
import './index.css'

export const Shaker = ({ x, y }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2600.000000 2600.000000"
        preserveAspectRatio="xMidYMid meet"
        className="shaker-karaoke-svg"
      >
        <g
          transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000) rotate(-30 30 100)"
          fill="#000000"
          stroke="none"
        >
          <path
            fill="#00000099"
            d="M15995 19613 c-934 -79 -2059 -536 -3250 -1320 -569 -376 -1125 -801
-1674 -1282 -541 -474 -1167 -1096 -1643 -1631 -1588 -1787 -2572 -3618 -2689
-4999 -14 -174 -7 -494 16 -635 45 -285 134 -523 276 -737 51 -77 130 -162
436 -470 205 -206 373 -378 373 -381 0 -4 -23 -38 -52 -75 -221 -293 -358
-612 -358 -837 1 -155 37 -251 125 -335 87 -82 191 -121 328 -121 225 0 545
140 852 373 l59 45 81 -77 c291 -275 692 -424 1198 -445 l118 -5 47 -42 c214
-188 562 -145 706 89 l37 58 132 34 c297 74 720 225 1062 380 157 71 445 216
638 323 l99 54 66 -25 c88 -34 218 -35 304 -4 171 62 282 194 316 378 l15 80
91 60 c675 443 1395 1016 2101 1673 l120 112 50 -7 c228 -32 447 106 516 327
20 65 25 181 10 222 -9 23 0 36 101 144 640 683 1244 1440 1673 2096 63 96 73
107 100 107 48 0 158 34 211 65 192 113 282 353 209 560 l-25 69 69 126 c329
602 554 1148 686 1662 l38 146 63 40 c231 147 270 498 79 710 l-45 50 0 79 c0
195 -44 467 -106 653 -73 220 -207 445 -355 596 l-60 60 50 66 c271 357 409
726 360 960 -64 303 -352 414 -735 283 -157 -54 -435 -211 -570 -321 -23 -19
-45 -34 -50 -34 -4 0 -175 166 -378 368 -323 320 -385 378 -479 440 -314 209
-678 305 -1136 300 -91 -1 -184 -3 -206 -5z m580 -781 c409 -90 634 -344 695
-787 10 -78 10 -80 -12 -95 -76 -50 -150 -180 -170 -298 -20 -122 20 -269 102
-371 l32 -39 -42 -168 c-111 -449 -297 -909 -593 -1461 l-81 -152 -51 -12
c-169 -39 -299 -165 -345 -334 -18 -65 -19 -177 -1 -237 l13 -47 -62 -98
c-378 -593 -950 -1317 -1572 -1990 l-159 -171 -73 5 c-154 12 -320 -72 -406
-207 -49 -77 -72 -160 -73 -265 l-1 -90 -134 -125 c-658 -613 -1370 -1180
-1989 -1583 l-132 -85 -48 14 c-106 33 -262 12 -365 -49 -98 -57 -183 -176
-209 -294 l-12 -51 -181 -96 c-506 -267 -992 -460 -1435 -572 l-174 -44 -35
31 c-89 79 -242 120 -366 100 -114 -19 -254 -96 -287 -157 -15 -29 -46 -31
-169 -9 -431 76 -665 314 -736 753 -20 126 -20 397 0 563 61 487 248 1048 561
1684 727 1474 2046 3096 3603 4432 1519 1304 3097 2163 4258 2317 161 22 528
15 649 -12z m2583 -298 c69 -48 -17 -314 -185 -569 -62 -94 -202 -273 -246
-313 l-25 -24 -42 74 c-61 104 -133 198 -245 316 -55 58 -94 107 -89 111 5 5
45 38 90 73 213 171 476 312 627 337 78 13 91 12 115 -5z m-910 -1497 l643
-643 -105 -35 -105 -35 -606 606 c-647 647 -635 633 -601 698 20 40 41 51 91
52 39 0 46 -6 683 -643z m957 -847 c43 -27 79 -72 94 -122 15 -45 16 -168 2
-229 -90 -399 -536 -961 -1028 -1292 -101 -68 -330 -193 -338 -185 -2 2 41 92
95 200 253 499 449 1006 550 1427 l23 94 91 42 c217 101 412 126 511 65z
m-1678 -2013 l913 -912 0 -43 c0 -35 -6 -49 -29 -73 -39 -39 -85 -39 -137 0
-21 16 -434 424 -916 907 -595 597 -879 888 -883 907 -17 67 29 127 97 127
l43 0 912 -913z m-87 -892 c46 -24 64 -68 63 -155 -7 -356 -503 -1007 -1033
-1352 -149 -98 -398 -214 -416 -195 -3 3 32 47 78 99 359 399 826 989 1143
1446 66 94 123 172 128 172 4 0 21 -7 37 -15z m-2228 -2003 l918 -917 0 -46
c0 -75 -54 -117 -125 -98 -21 6 -293 271 -942 921 l-913 913 0 45 c0 63 36
100 99 100 l46 0 917 -918z m-485 -1111 c-129 -317 -434 -696 -782 -971 -381
-300 -762 -436 -870 -309 -14 17 -25 38 -25 48 0 10 64 61 173 136 453 315
1012 756 1432 1130 60 54 111 93 113 87 2 -7 -16 -61 -41 -121z m-2419 -1204
c491 -490 900 -905 909 -921 38 -72 -34 -161 -115 -141 -39 9 -1828 1798
-1843 1843 -24 72 49 143 126 121 21 -6 294 -273 923 -902z m-3500 -91 c15 -8
295 -284 622 -613 l596 -598 -36 -107 -36 -107 -641 642 c-431 432 -642 650
-645 667 -8 44 11 89 45 110 38 24 59 25 95 6z m3167 -493 c-28 -67 -115 -223
-164 -297 -407 -601 -1110 -1098 -1480 -1046 -87 12 -146 51 -180 118 -53 103
-18 319 84 522 l33 65 133 34 c407 102 947 313 1404 550 94 48 173 89 178 90
4 0 0 -16 -8 -36z m-3627 -463 c113 -107 241 -204 331 -249 l43 -22 -23 -26
c-13 -14 -69 -61 -124 -105 -261 -209 -537 -348 -690 -348 -73 0 -80 8 -79 82
4 157 148 442 350 693 38 47 71 85 72 85 2 0 56 -50 120 -110z"
          />
        </g>
      </svg>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 58.978 58.978"
        style={{ enableBackground: 'new 0 0 58.978 58.978' }}
        xmlSpace="preserve"
        className="shaker-chicken-svg"
      >
        <path
          d="M41.808,34.827c4.094,0,8.489-1.782,11.938-5.231c6.149-6.149,7.001-15.304,1.899-20.405
	c-5.102-5.103-14.256-4.25-20.405,1.899c-4.988,4.988-6.489,11.952-4.156,17.127l-1.656,1.802l-1.617-1.759
	c2.155-4.582,1.247-10.61-2.46-15.431c-0.119-0.19-0.247-0.364-0.385-0.502c-0.002-0.002-0.006-0.003-0.008-0.005
	c-0.383-0.464-0.785-0.918-1.221-1.354C17.59,4.818,8.435,3.966,3.333,9.069c-5.102,5.102-4.25,14.255,1.899,20.404
	c0.42,0.42,0.859,0.811,1.308,1.185c0.002,0.002,0.003,0.005,0.005,0.008c0.167,0.166,0.35,0.304,0.543,0.422
	c2.59,1.999,5.583,3.251,8.639,3.556c0.492,0.05,0.979,0.074,1.458,0.074c1.861,0,3.605-0.381,5.17-1.092l2.036,1.871l-6.276,6.829
	c-0.116,0.13-0.243,0.238-0.387,0.329c-1.175,0.736-4.891,2.987-4.891,2.987c-0.748,0.449-1.239,1.203-1.346,2.069
	c-0.106,0.867,0.187,1.718,0.804,2.335l2.369,2.369c0.534,0.534,1.242,0.825,1.984,0.825c0.116,0,0.233-0.007,0.351-0.021
	c0.866-0.106,1.621-0.598,2.067-1.342c0-0.001,2.253-3.719,2.99-4.894c0.09-0.145,0.198-0.271,0.338-0.396l7.032-6.463l7.042,6.472
	c0.13,0.117,0.238,0.243,0.328,0.387c0.737,1.175,2.988,4.891,2.988,4.891c0.449,0.749,1.204,1.239,2.07,1.346
	c0.117,0.015,0.234,0.021,0.35,0.021c0.742,0,1.451-0.291,1.984-0.825l2.37-2.369c0.617-0.617,0.91-1.468,0.803-2.334
	c-0.106-0.866-0.597-1.621-1.344-2.069c-0.111-0.067-3.734-2.263-4.894-2.99c-0.144-0.09-0.27-0.196-0.395-0.337l-6.267-6.82
	l1.993-1.832C38.097,34.436,39.918,34.827,41.808,34.827z M40.063,44.348c1.182,0.742,4.922,3.008,4.922,3.008l0.003,0.002
	c0.217,0.13,0.359,0.349,0.39,0.6s-0.054,0.497-0.232,0.676l-2.37,2.369c-0.179,0.179-0.424,0.261-0.676,0.232
	c-0.251-0.03-0.469-0.173-0.602-0.394c0,0-2.266-3.739-3.007-4.921c-0.189-0.301-0.42-0.574-0.678-0.805l-6.907-6.349l2.085-1.916
	l6.257,6.808C39.488,43.928,39.763,44.161,40.063,44.348z M47.174,7.846c2.688,0,5.201,0.902,7.057,2.758
	c4.322,4.322,3.47,12.207-1.899,17.577c-0.582,0.582-1.197,1.1-1.83,1.575l1.892-5.268c0.128-0.356,0.044-0.755-0.218-1.028
	c-0.262-0.274-0.655-0.377-1.018-0.265l-5.828,1.797l1.643-6.023c0.094-0.346-0.004-0.716-0.258-0.97
	c-0.254-0.255-0.625-0.352-0.97-0.258l-6.023,1.643l1.797-5.827c0.112-0.362,0.009-0.756-0.265-1.018
	c-0.274-0.263-0.674-0.346-1.029-0.219l-4.967,1.784c0.428-0.551,0.885-1.09,1.395-1.6C39.718,9.439,43.601,7.846,47.174,7.846z
	 M33.525,16.832c0.031-0.008,0.062-0.002,0.093-0.013l5.4-1.939l-1.744,5.652c-0.107,0.349-0.017,0.729,0.237,0.99
	c0.254,0.263,0.631,0.364,0.982,0.27l6.09-1.661l-1.661,6.091c-0.096,0.352,0.007,0.728,0.27,0.981
	c0.263,0.253,0.64,0.346,0.99,0.236l5.653-1.743l-1.939,5.399c-0.034,0.095-0.038,0.192-0.042,0.288
	c-3.795,1.84-7.942,1.948-11.096,0.192l-0.019-0.011c-0.754-0.423-1.421-0.923-1.983-1.485c-0.298-0.297-0.577-0.624-0.837-0.979
	c-0.002-0.003-0.004-0.005-0.005-0.008c-0.259-0.353-0.498-0.733-0.716-1.138l-0.028-0.052
	C31.489,24.73,31.649,20.599,33.525,16.832z M4.747,10.483c1.856-1.856,4.369-2.758,7.058-2.758c3.572,0,7.456,1.593,10.519,4.656
	c0.498,0.498,0.943,1.023,1.363,1.559c0.249,0.513,0.213,1.629-0.618,3.415c-0.975,2.095-2.721,4.458-4.917,6.654
	c-4.437,4.435-8.66,6.053-9.979,5.39c-0.527-0.416-1.042-0.855-1.527-1.34C1.277,22.69,0.425,14.805,4.747,10.483z M15.927,32.654
	c-1.687-0.168-3.359-0.665-4.938-1.45c2.682-0.838,5.875-3.079,8.576-5.78c2.357-2.357,4.246-4.924,5.316-7.226
	c0.252-0.541,0.428-1.025,0.574-1.482c1.903,3.824,2.04,8.025,0.276,11.216l-0.025,0.044c-0.422,0.754-0.922,1.421-1.484,1.983
	c-0.296,0.296-0.623,0.574-0.975,0.833c-0.006,0.005-0.013,0.009-0.02,0.014c-0.351,0.257-0.728,0.495-1.13,0.711l-0.468,0.252
	C19.955,32.551,18.009,32.865,15.927,32.654z M25.746,34.025l-1.567-1.44c0.008-0.005,0.014-0.011,0.022-0.017
	c0.238-0.169,0.473-0.341,0.698-0.529c0.259-0.213,0.506-0.434,0.738-0.666c0.261-0.261,0.506-0.545,0.742-0.839
	c0.094-0.116,0.186-0.234,0.275-0.353c0.031-0.042,0.065-0.08,0.095-0.122l1.321,1.437l-1.374,1.495L25.746,34.025z M34.654,32.606
	l-3.401,3.126l-3.302,3.035l0,0l-6.897,6.34c-0.268,0.239-0.5,0.513-0.688,0.813l0,0.001c-0.741,1.181-3.007,4.92-3.009,4.924
	c-0.13,0.217-0.349,0.359-0.599,0.39c-0.252,0.027-0.497-0.054-0.676-0.232l-2.369-2.369c-0.179-0.179-0.264-0.425-0.232-0.676
	c0.031-0.251,0.173-0.47,0.393-0.602c0,0,3.74-2.266,4.923-3.008c0.301-0.189,0.575-0.421,0.804-0.678l7.709-8.388l3.48-3.786l0,0
	l1.342-1.461c0.04,0.058,0.085,0.109,0.126,0.166c0.111,0.152,0.222,0.303,0.341,0.45c0.237,0.296,0.483,0.58,0.745,0.842
	c0.233,0.233,0.484,0.454,0.745,0.669c0.13,0.108,0.263,0.208,0.397,0.31C34.54,32.516,34.594,32.563,34.654,32.606z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </>
  )
}
