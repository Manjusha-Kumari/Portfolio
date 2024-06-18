import React from 'react'
import './certificates.css'

const Certificates__achived = [
    {
        year: '2024',
        title: 'Airtel SheCodes Finalist',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        year: '2024',
        title: 'Airtel SheCodes Finalist',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
]

const Certificates = () => {
    return <div className="certificate__container d-flex align-items-center flex-wrap justify-content-between">
        {Certificates__achived.map((item, index) => (
            <div className="certificate__item">
                <CertificateItem 
                    key={index}
                    year={item.year}
                    title={item.title}
                    text={item.text}
                />
            </div>
        ))}
    </div>
}

const CertificateItem = ({year, title, text}) => {
    return <div className="single__certificate">
        <div className="certificate__year">{year}</div>
            <h6 className='certificate__title'>{title} - {" "}
                <span>{text}</span>
            </h6>
    </div>
}

export default Certificates