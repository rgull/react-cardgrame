import React from 'react';

const BotCards = (props) => {
    console.log('Botcardprops', props.class)
    const images = []
    for (let i = 0; i < 10; i++) {
        images.push("https://i.pinimg.com/originals/58/17/85/581785ed38d3e41c25a22163c845abec.jpg")
    }
    const Images = images.map(x => {
        return (<>
            <img src={x} width="75px" alt="inverted-card" key={x} />
        </>)
    })
    return (
        <div className={props.class}>
            {Images}
        </div>
    )
}

export default BotCards;