'use client';
import Image from 'next/image';
import styles from './about.module.css';
import { useState } from 'react';
import { FaCheck } from "react-icons/fa6";


const ContentImageBox = ({data}) => {

    const [checkItems, setCheckItems] = useState(['Etiam sed dolor ac diam volutpat.', 'Erat volutpat aliquet imperdiet.', 'Purus a odio finibus bibendum.']);
    
    return <>
        <div className={`${styles.image}`}>
            <Image src={data.image} alt="food" width={2121} height={1414} />
        </div>
        <div className={`${styles.text}`} >
            <div dangerouslySetInnerHTML={{__html: data.content.body}} />
                
            
            <div className={`${styles.checkList}`}>
                
                    {data.content.checkList?.map((item, index) => {
                        return <div key={index}><FaCheck /> <span>{item}</span></div>
                    })}
                
            </div>
        </div>
    </>



}


const About = () => {

    const data = [
        {
            image: '/features/1.png',
            content: {
                body : `<h4>
                    We pride ourselves on making real food from the best ingredients.
                </h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                </p>`,
                checkList: ['Etiam sed dolor ac diam volutpat.', 'Erat volutpat aliquet imperdiet.', 'Purus a odio finibus bibendum.']
            }
        },
        {
            image: '/features/2.png',
            content: {
                body : `<h4>
                    We pride ourselves on making real food from the best ingredients.
                </h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                </p>`,
                checkList: ['Etiam sed dolor ac diam volutpat.', 'Erat volutpat aliquet imperdiet.', 'Purus a odio finibus bibendum.']
            }
        },
        {
            image: '/features/2.png',
            content: {
                body : `<h4>
                    We pride ourselves on making real food from the best ingredients.
                </h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                </p>`,
                checkList: ['Etiam sed dolor ac diam volutpat.', 'Erat volutpat aliquet imperdiet.', 'Purus a odio finibus bibendum.']
            }
        }
    ];

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.content} wrapper`}>

                {data.map((item, index) => {
                    return <div key={index} className={`${styles.row}`}><ContentImageBox key={index} data={item}></ContentImageBox>   </div>
                })}
                
               
            </div>
        </div>
    )
};
export default About