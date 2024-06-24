import React from 'react'
import './SevenSegments.css'


const segment = {
    0: [true, true, true, true, true, true, false],
    1: [false, true, true, false, false, false, false],
    2: [true, true, false, true, true, false, true],
    3: [true, true, true, true, false, false, true],
    4: [false, true, true, false, false, true, true],
    5: [true, false, true, true, false, true, true],
    6: [true, false, true, true, true, true, true],
    7: [true, true, true, false, false, false, false],
    8: [true, true, true, true, true, true, true],
    9: [true, true, true, true, false, true, true],
};

const SevenSegments2 = ({ digit2 }) => {
    const segments = segment[digit2] || [false, false, false, false, false, false, false];

    return (
        <><h2>Segunda Parte</h2>
            <section className='container'>
                <div className="segmentsdisplay">
                    <article className={`segment a ${segments[0] ? 'on' : 'off'}`}></article>
                    <article className={`segment b ${segments[1] ? 'on' : 'off'}`}></article>
                    <article className={`segment c ${segments[2] ? 'on' : 'off'}`}></article>
                    <article className={`segment d ${segments[3] ? 'on' : 'off'}`}></article>
                    <article className={`segment e ${segments[4] ? 'on' : 'off'}`}></article>
                    <article className={`segment f ${segments[5] ? 'on' : 'off'}`}></article>
                    <article className={`segment g ${segments[6] ? 'on' : 'off'}`}></article>
                </div>
            </section>
        </>

    );
};

export default SevenSegments2;
