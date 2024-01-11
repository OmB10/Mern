import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import CTAButton from '../HomePage/Button'
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({ position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroudGradient, codeColor }) => {
    return (
        <div className={`flex flex-col ${position} my-20 relative justify-between gap-14 lg:gap-10`}>
            {/* sec 1 */}
            <div className='w-[100%] lg:w-[40%] flex flex-col gap-8'>
                {heading}
                <div className='text-richblack-300 font-bold'>
                    {subheading}
                </div>
                <div className='flex gap-7 mt-7'>
                    <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                        <div className='flex gap-2 items-center'>
                            {ctabtn1.btnText}
                            <FaArrowRight />
                        </div>
                    </CTAButton>

                    <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                        {ctabtn2.btnText}
                    </CTAButton>
                </div>
            </div>

            {/* sec 2 */}
            <div className='h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[20px] sm:leading-6 relative w-[100%] lg:w-[470px]'>
                {backgroudGradient}
                <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>

                </div>

                <div className={`w-[90%] flex flex-col gap-2 pr-2 font-bold ${codeColor} font-mono`}>
                    <TypeAnimation
                        sequence={[codeblock, 2000, ""]}
                        repeat={Infinity}
                        cursor={true}
                        style={
                            {
                                whiteSpace: "pre-line",
                                display: "block",
                                color: "red"
                            }
                        }
                        omitDeletionAnimation={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default CodeBlocks