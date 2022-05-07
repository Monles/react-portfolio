import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(-10 -30) scale(1 1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M500.7,93.1h-55.3h-55.2c-5.5,0-10.6,1.1-15.1,3.2c-4.3,2-8.3,4.7-11.9,8.1c-3.4,3.4-6.4,7.1-8.7,10.9
	c-2.4,3.6-4.3,7.5-6.2,11.7L280,302.8l-69.3-176c-4.2-9.7-9.5-17.7-15.7-23.8c-6.7-6.6-15.8-10-26.9-10h-55.2H58.4H3.2l186,393.8
	v337.1h55.2h70.2h55.2v-337L553.3,98.6l2.5-5.5H500.7z M249.2,819h-4.9H194V485.7L11,98.1h49.8h5.5h46.8c9.9,0,17.8,2.9,23.6,8.6
	c5.7,5.7,10.6,13.1,14.5,22.1l71.7,182.8c6.4,15.4,11.8,28.5,16.4,40.2c4.3,10.9,8.1,21.6,11.4,32l2.4,7.6l2.3-7.7
	c3.2-11.1,6.9-22.1,10.6-32.5c4.1-11.4,8.8-23.3,13.9-35.3c0.7-1.5,1.3-3,2-4.5l0.7-1.9l70.1-180.6c1.8-4,3.6-7.6,5.9-11
	c2.2-3.5,4.9-6.8,8-9.9c3.1-3,6.7-5.4,10.5-7.1c3.9-1.8,8.3-2.7,13.1-2.7h36.4h18.7h47.5L310,485.2l-0.2,0.5V819H249.2z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
