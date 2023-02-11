import React from 'react'
import { useRef,useState } from 'react'
import Kick from "../Assets/bassdrum.mp3"
import snare from "../Assets/snare.mp3"
import smallTom from '../Assets/smallTom.mp3'
import medTom from '../Assets/medTom.mp3'
import floorTom from '../Assets/floorTom.mp3'
import hiHatOpen from '../Assets/hiHatOpen.mp3'
import hiHatClosed from '../Assets/hiHatClosed.mp3'
import crash from '../Assets/crash.mp3'
import ride from '../Assets/ride.mp3'
import Play from '../Assets/Play.svg'
import Pause from '../Assets/Pause.svg'
import Reset from '../Assets/Reset.svg'

function Player() {
    const [playing, setPlaying] = useState()
    const [speed, setSpeed]= useState(10)


    const progressBar = useRef()
    const trackContainer = useRef()
    const trackRef = useRef()

    //notes
    //kicks
    const kickNote1 = useRef()
    const kickNote2 = useRef()
    const kickNote3 = useRef()
    const kickNote4 = useRef()
    const kickNote5 = useRef()
    const kickNote6 = useRef()
    const kickNote7 = useRef()
    const kickNote8 = useRef()
    const kickNote9 = useRef()
    const kickNote10 = useRef()
    const kickNote11 = useRef()
    const kickNote12 = useRef()
    const kickNote13 = useRef()
    const kickNote14 = useRef()
    const kickNote15 = useRef()
    const kickNote16 = useRef()
    const kickNote17 = useRef()
    const kickNote18 = useRef()
    const kickNote19 = useRef()
    const kickNote20 = useRef()
    const kickNote21 = useRef()
    const kickNote22 = useRef()
    const kickNote23 = useRef()
    const kickNote24 = useRef()
    const kickNote25 = useRef()
    const kickNote26 = useRef()
    const kickNote27 = useRef()
    const kickNote28 = useRef()
    const kickNote29 = useRef()
    const kickNote30 = useRef()
    const kickNote31 = useRef()
    const kickNote32 = useRef()
    const kickNote33 = useRef()
    const kickNote34 = useRef()
    const kickNote35 = useRef()
    const kickNote36 = useRef()
    const kickNote37 = useRef()
    const kickNote38 = useRef()
    const kickNote39 = useRef()
    const kickNote40 = useRef()
    const kickNote41 = useRef()
    const kickNote42 = useRef()
    const kickNote43 = useRef()
    const kickNote44 = useRef()
    const kickNote45 = useRef()
    const kickNote46 = useRef()
    const kickNote47 = useRef()
    const kickNote48 = useRef()
    const kickNote49 = useRef()
    const kickNote50 = useRef()
    const kickNote51 = useRef()
    const kickNote52 = useRef()
    const kickNote53 = useRef()
    const kickNote54 = useRef()
    const kickNote55 = useRef()
    const kickNote56 = useRef()
    const kickNote57 = useRef()
    const kickNote58 = useRef()
    const kickNote59 = useRef()
    const kickNote60 = useRef()
    const kickNote61 = useRef()
    const kickNote62 = useRef()
    const kickNote63 = useRef()
    const kickNote64 = useRef()

    // snare
    const snareNote1 = useRef()
    const snareNote2 = useRef()
    const snareNote3 = useRef()
    const snareNote4 = useRef()
    const snareNote5 = useRef()
    const snareNote6 = useRef()
    const snareNote7 = useRef()
    const snareNote8 = useRef()
    const snareNote9 = useRef()
    const snareNote10 = useRef()
    const snareNote11 = useRef()
    const snareNote12 = useRef()
    const snareNote13 = useRef()
    const snareNote14 = useRef()
    const snareNote15 = useRef()
    const snareNote16 = useRef()
    const snareNote17 = useRef()
    const snareNote18 = useRef()
    const snareNote19 = useRef()
    const snareNote20 = useRef()
    const snareNote21 = useRef()
    const snareNote22 = useRef()
    const snareNote23 = useRef()
    const snareNote24 = useRef()
    const snareNote25 = useRef()
    const snareNote26 = useRef()
    const snareNote27 = useRef()
    const snareNote28 = useRef()
    const snareNote29 = useRef()
    const snareNote30 = useRef()
    const snareNote31 = useRef()
    const snareNote32 = useRef()
    const snareNote33 = useRef()
    const snareNote34 = useRef()
    const snareNote35 = useRef()
    const snareNote36 = useRef()
    const snareNote37 = useRef()
    const snareNote38 = useRef()
    const snareNote39 = useRef()
    const snareNote40 = useRef()
    const snareNote41 = useRef()
    const snareNote42 = useRef()
    const snareNote43 = useRef()
    const snareNote44 = useRef()
    const snareNote45 = useRef()
    const snareNote46 = useRef()
    const snareNote47 = useRef()
    const snareNote48 = useRef()
    const snareNote49 = useRef()
    const snareNote50 = useRef()
    const snareNote51 = useRef()
    const snareNote52 = useRef()
    const snareNote53 = useRef()
    const snareNote54 = useRef()
    const snareNote55 = useRef()
    const snareNote56 = useRef()
    const snareNote57 = useRef()
    const snareNote58 = useRef()
    const snareNote59 = useRef()
    const snareNote60 = useRef()
    const snareNote61 = useRef()
    const snareNote62 = useRef()
    const snareNote63 = useRef()
    const snareNote64 = useRef()

    // tom1
    const tom1Note1 = useRef()
    const tom1Note2 = useRef()
    const tom1Note3 = useRef()
    const tom1Note4 = useRef()
    const tom1Note5 = useRef()
    const tom1Note6 = useRef()
    const tom1Note7 = useRef()
    const tom1Note8 = useRef()
    const tom1Note9 = useRef()
    const tom1Note10 = useRef()
    const tom1Note11 = useRef()
    const tom1Note12 = useRef()
    const tom1Note13 = useRef()
    const tom1Note14 = useRef()
    const tom1Note15 = useRef()
    const tom1Note16 = useRef()
    const tom1Note17 = useRef()
    const tom1Note18 = useRef()
    const tom1Note19 = useRef()
    const tom1Note20 = useRef()
    const tom1Note21 = useRef()
    const tom1Note22 = useRef()
    const tom1Note23 = useRef()
    const tom1Note24 = useRef()
    const tom1Note25 = useRef()
    const tom1Note26 = useRef()
    const tom1Note27 = useRef()
    const tom1Note28 = useRef()
    const tom1Note29 = useRef()
    const tom1Note30 = useRef()
    const tom1Note31 = useRef()
    const tom1Note32 = useRef()
    const tom1Note33 = useRef()
    const tom1Note34 = useRef()
    const tom1Note35 = useRef()
    const tom1Note36 = useRef()
    const tom1Note37 = useRef()
    const tom1Note38 = useRef()
    const tom1Note39 = useRef()
    const tom1Note40 = useRef()
    const tom1Note41 = useRef()
    const tom1Note42 = useRef()
    const tom1Note43 = useRef()
    const tom1Note44 = useRef()
    const tom1Note45 = useRef()
    const tom1Note46 = useRef()
    const tom1Note47 = useRef()
    const tom1Note48 = useRef()
    const tom1Note49 = useRef()
    const tom1Note50 = useRef()
    const tom1Note51 = useRef()
    const tom1Note52 = useRef()
    const tom1Note53 = useRef()
    const tom1Note54 = useRef()
    const tom1Note55 = useRef()
    const tom1Note56 = useRef()
    const tom1Note57 = useRef()
    const tom1Note58 = useRef()
    const tom1Note59 = useRef()
    const tom1Note60 = useRef()
    const tom1Note61 = useRef()
    const tom1Note62 = useRef()
    const tom1Note63 = useRef()
    const tom1Note64 = useRef()

    // tom2
    const tom2Note1 = useRef()
    const tom2Note2 = useRef()
    const tom2Note3 = useRef()
    const tom2Note4 = useRef()
    const tom2Note5 = useRef()
    const tom2Note6 = useRef()
    const tom2Note7 = useRef()
    const tom2Note8 = useRef()
    const tom2Note9 = useRef()
    const tom2Note10 = useRef()
    const tom2Note11 = useRef()
    const tom2Note12 = useRef()
    const tom2Note13 = useRef()
    const tom2Note14 = useRef()
    const tom2Note15 = useRef()
    const tom2Note16 = useRef()
    const tom2Note17 = useRef()
    const tom2Note18 = useRef()
    const tom2Note19 = useRef()
    const tom2Note20 = useRef()
    const tom2Note21 = useRef()
    const tom2Note22 = useRef()
    const tom2Note23 = useRef()
    const tom2Note24 = useRef()
    const tom2Note25 = useRef()
    const tom2Note26 = useRef()
    const tom2Note27 = useRef()
    const tom2Note28 = useRef()
    const tom2Note29 = useRef()
    const tom2Note30 = useRef()
    const tom2Note31 = useRef()
    const tom2Note32 = useRef()
    const tom2Note33 = useRef()
    const tom2Note34 = useRef()
    const tom2Note35 = useRef()
    const tom2Note36 = useRef()
    const tom2Note37 = useRef()
    const tom2Note38 = useRef()
    const tom2Note39 = useRef()
    const tom2Note40 = useRef()
    const tom2Note41 = useRef()
    const tom2Note42 = useRef()
    const tom2Note43 = useRef()
    const tom2Note44 = useRef()
    const tom2Note45 = useRef()
    const tom2Note46 = useRef()
    const tom2Note47 = useRef()
    const tom2Note48 = useRef()
    const tom2Note49 = useRef()
    const tom2Note50 = useRef()
    const tom2Note51 = useRef()
    const tom2Note52 = useRef()
    const tom2Note53 = useRef()
    const tom2Note54 = useRef()
    const tom2Note55 = useRef()
    const tom2Note56 = useRef()
    const tom2Note57 = useRef()
    const tom2Note58 = useRef()
    const tom2Note59 = useRef()
    const tom2Note60 = useRef()
    const tom2Note61 = useRef()
    const tom2Note62 = useRef()
    const tom2Note63 = useRef()
    const tom2Note64 = useRef()

    // floor tom
    const floorTom1 = useRef()
    const floorTom2 = useRef()
    const floorTom3 = useRef()
    const floorTom4 = useRef()
    const floorTom5 = useRef()
    const floorTom6 = useRef()
    const floorTom7 = useRef()
    const floorTom8 = useRef()
    const floorTom9 = useRef()
    const floorTom10 = useRef()
    const floorTom11 = useRef()
    const floorTom12 = useRef()
    const floorTom13 = useRef()
    const floorTom14 = useRef()
    const floorTom15 = useRef()
    const floorTom16 = useRef()
    const floorTom17 = useRef()
    const floorTom18 = useRef()
    const floorTom19 = useRef()
    const floorTom20 = useRef()
    const floorTom21 = useRef()
    const floorTom22 = useRef()
    const floorTom23 = useRef()
    const floorTom24 = useRef()
    const floorTom25 = useRef()
    const floorTom26 = useRef()
    const floorTom27 = useRef()
    const floorTom28 = useRef()
    const floorTom29 = useRef()
    const floorTom30 = useRef()
    const floorTom31 = useRef()
    const floorTom32 = useRef()
    const floorTom33 = useRef()
    const floorTom34 = useRef()
    const floorTom35 = useRef()
    const floorTom36 = useRef()
    const floorTom37 = useRef()
    const floorTom38 = useRef()
    const floorTom39 = useRef()
    const floorTom40 = useRef()
    const floorTom41 = useRef()
    const floorTom42 = useRef()
    const floorTom43 = useRef()
    const floorTom44 = useRef()
    const floorTom45 = useRef()
    const floorTom46 = useRef()
    const floorTom47 = useRef()
    const floorTom48 = useRef()
    const floorTom49 = useRef()
    const floorTom50 = useRef()
    const floorTom51 = useRef()
    const floorTom52 = useRef()
    const floorTom53 = useRef()
    const floorTom54 = useRef()
    const floorTom55 = useRef()
    const floorTom56 = useRef()
    const floorTom57 = useRef()
    const floorTom58 = useRef()
    const floorTom59 = useRef()
    const floorTom60 = useRef()
    const floorTom61 = useRef()
    const floorTom62 = useRef()
    const floorTom63 = useRef()
    const floorTom64 = useRef()

    // high hat
    const hiHat1 = useRef()
    const hiHat2 = useRef()
    const hiHat3 = useRef()
    const hiHat4 = useRef()
    const hiHat5 = useRef()
    const hiHat6 = useRef()
    const hiHat7 = useRef()
    const hiHat8 = useRef()
    const hiHat9 = useRef()
    const hiHat10 = useRef()
    const hiHat11 = useRef()
    const hiHat12 = useRef()
    const hiHat13 = useRef()
    const hiHat14 = useRef()
    const hiHat15 = useRef()
    const hiHat16 = useRef()
    const hiHat17 = useRef()
    const hiHat18 = useRef()
    const hiHat19 = useRef()
    const hiHat20 = useRef()
    const hiHat21 = useRef()
    const hiHat22 = useRef()
    const hiHat23 = useRef()
    const hiHat24 = useRef()
    const hiHat25 = useRef()
    const hiHat26 = useRef()
    const hiHat27 = useRef()
    const hiHat28 = useRef()
    const hiHat29 = useRef()
    const hiHat30 = useRef()
    const hiHat31 = useRef()
    const hiHat32 = useRef()
    const hiHat33 = useRef()
    const hiHat34 = useRef()
    const hiHat35 = useRef()
    const hiHat36 = useRef()
    const hiHat37 = useRef()
    const hiHat38 = useRef()
    const hiHat39 = useRef()
    const hiHat40 = useRef()
    const hiHat41 = useRef()
    const hiHat42 = useRef()
    const hiHat43 = useRef()
    const hiHat44 = useRef()
    const hiHat45 = useRef()
    const hiHat46 = useRef()
    const hiHat47 = useRef()
    const hiHat48 = useRef()
    const hiHat49 = useRef()
    const hiHat50 = useRef()
    const hiHat51 = useRef()
    const hiHat52 = useRef()
    const hiHat53 = useRef()
    const hiHat54 = useRef()
    const hiHat55 = useRef()
    const hiHat56 = useRef()
    const hiHat57 = useRef()
    const hiHat58 = useRef()
    const hiHat59 = useRef()
    const hiHat60 = useRef()
    const hiHat61 = useRef()
    const hiHat62 = useRef()
    const hiHat63 = useRef()
    const hiHat64 = useRef()

    // crash
    const crash1 = useRef()
    const crash2 = useRef()
    const crash3 = useRef()
    const crash4 = useRef()
    const crash5 = useRef()
    const crash6 = useRef()
    const crash7 = useRef()
    const crash8 = useRef()
    const crash9 = useRef()
    const crash10 = useRef()
    const crash11 = useRef()
    const crash12 = useRef()
    const crash13 = useRef()
    const crash14 = useRef()
    const crash15 = useRef()
    const crash16 = useRef()
    const crash17 = useRef()
    const crash18 = useRef()
    const crash19 = useRef()
    const crash20 = useRef()
    const crash21 = useRef()
    const crash22 = useRef()
    const crash23 = useRef()
    const crash24 = useRef()
    const crash25 = useRef()
    const crash26 = useRef()
    const crash27 = useRef()
    const crash28 = useRef()
    const crash29 = useRef()
    const crash30 = useRef()
    const crash31 = useRef()
    const crash32 = useRef()
    const crash33 = useRef()
    const crash34 = useRef()
    const crash35 = useRef()
    const crash36 = useRef()
    const crash37 = useRef()
    const crash38 = useRef()
    const crash39 = useRef()
    const crash40 = useRef()
    const crash41 = useRef()
    const crash42 = useRef()
    const crash43 = useRef()
    const crash44 = useRef()
    const crash45 = useRef()
    const crash46 = useRef()
    const crash47 = useRef()
    const crash48 = useRef()
    const crash49 = useRef()
    const crash50 = useRef()
    const crash51 = useRef()
    const crash52 = useRef()
    const crash53 = useRef()
    const crash54 = useRef()
    const crash55 = useRef()
    const crash56 = useRef()
    const crash57 = useRef()
    const crash58 = useRef()
    const crash59 = useRef()
    const crash60 = useRef()
    const crash61 = useRef()
    const crash62 = useRef()
    const crash63 = useRef()
    const crash64 = useRef()

    // ride
    const ride1 = useRef()
    const ride2 = useRef()
    const ride3 = useRef()
    const ride4 = useRef()
    const ride5 = useRef()
    const ride6 = useRef()
    const ride7 = useRef()
    const ride8 = useRef()
    const ride9 = useRef()
    const ride10 = useRef()
    const ride11 = useRef()
    const ride12 = useRef()
    const ride13 = useRef()
    const ride14 = useRef()
    const ride15 = useRef()
    const ride16 = useRef()
    const ride17 = useRef()
    const ride18 = useRef()
    const ride19 = useRef()
    const ride20 = useRef()
    const ride21 = useRef()
    const ride22 = useRef()
    const ride23 = useRef()
    const ride24 = useRef()
    const ride25 = useRef()
    const ride26 = useRef()
    const ride27 = useRef()
    const ride28 = useRef()
    const ride29 = useRef()
    const ride30 = useRef()
    const ride31 = useRef()
    const ride32 = useRef()
    const ride33 = useRef()
    const ride34 = useRef()
    const ride35 = useRef()
    const ride36 = useRef()
    const ride37 = useRef()
    const ride38 = useRef()
    const ride39 = useRef()
    const ride40 = useRef()
    const ride41 = useRef()
    const ride42 = useRef()
    const ride43 = useRef()
    const ride44 = useRef()
    const ride45 = useRef()
    const ride46 = useRef()
    const ride47 = useRef()
    const ride48 = useRef()
    const ride49 = useRef()
    const ride50 = useRef()
    const ride51 = useRef()
    const ride52 = useRef()
    const ride53 = useRef()
    const ride54 = useRef()
    const ride55 = useRef()
    const ride56 = useRef()
    const ride57 = useRef()
    const ride58 = useRef()
    const ride59 = useRef()
    const ride60 = useRef()
    const ride61 = useRef()
    const ride62 = useRef()
    const ride63 = useRef()
    const ride64 = useRef()
    
    
    
   
    function moveProgressBar(){
        if((parseInt(progressBar.current.style.left) + 1) > trackContainer.current.offsetWidth){
            progressBar.current.style.left = 0 + "px"   
        }else{
            progressBar.current.style.left = (parseInt(progressBar.current.style.left) + 1) + "px"
        }
        //kick drums 
        if(progressBar.current.offsetLeft === kickNote1.current.offsetLeft && kickNote1.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote2.current.offsetLeft && kickNote2.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote3.current.offsetLeft && kickNote3.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote4.current.offsetLeft && kickNote4.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote5.current.offsetLeft && kickNote5.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote6.current.offsetLeft && kickNote6.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote7.current.offsetLeft && kickNote7.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote8.current.offsetLeft && kickNote8.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote9.current.offsetLeft && kickNote9.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote10.current.offsetLeft && kickNote10.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote11.current.offsetLeft && kickNote11.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote12.current.offsetLeft && kickNote12.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote13.current.offsetLeft && kickNote13.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote14.current.offsetLeft && kickNote14.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote15.current.offsetLeft && kickNote15.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote16.current.offsetLeft && kickNote16.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote17.current.offsetLeft && kickNote17.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote18.current.offsetLeft && kickNote18.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote19.current.offsetLeft && kickNote19.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote20.current.offsetLeft && kickNote20.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote21.current.offsetLeft && kickNote21.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote22.current.offsetLeft && kickNote22.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote23.current.offsetLeft && kickNote23.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote24.current.offsetLeft && kickNote24.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote25.current.offsetLeft && kickNote25.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote26.current.offsetLeft && kickNote26.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote27.current.offsetLeft && kickNote27.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote28.current.offsetLeft && kickNote28.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote29.current.offsetLeft && kickNote29.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote30.current.offsetLeft && kickNote30.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote31.current.offsetLeft && kickNote31.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote32.current.offsetLeft && kickNote32.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote33.current.offsetLeft && kickNote33.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote34.current.offsetLeft && kickNote34.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote35.current.offsetLeft && kickNote35.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote36.current.offsetLeft && kickNote36.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote37.current.offsetLeft && kickNote37.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote38.current.offsetLeft && kickNote38.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote39.current.offsetLeft && kickNote39.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote40.current.offsetLeft && kickNote40.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote41.current.offsetLeft && kickNote41.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote42.current.offsetLeft && kickNote42.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote43.current.offsetLeft && kickNote43.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote44.current.offsetLeft && kickNote44.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote45.current.offsetLeft && kickNote45.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote46.current.offsetLeft && kickNote46.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote47.current.offsetLeft && kickNote47.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote48.current.offsetLeft && kickNote48.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote49.current.offsetLeft && kickNote49.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote50.current.offsetLeft && kickNote50.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote51.current.offsetLeft && kickNote51.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote52.current.offsetLeft && kickNote52.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote53.current.offsetLeft && kickNote53.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote54.current.offsetLeft && kickNote54.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote55.current.offsetLeft && kickNote55.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote56.current.offsetLeft && kickNote56.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote57.current.offsetLeft && kickNote57.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote58.current.offsetLeft && kickNote58.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote59.current.offsetLeft && kickNote59.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote60.current.offsetLeft && kickNote60.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote61.current.offsetLeft && kickNote61.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote62.current.offsetLeft && kickNote62.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote63.current.offsetLeft && kickNote63.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }else if (progressBar.current.offsetLeft === kickNote64.current.offsetLeft && kickNote64.current.style.backgroundColor === "blue"){
            const kickBeat = new Audio(Kick)
            kickBeat.play()
        }

        // snare 
        if(progressBar.current.offsetLeft === snareNote1.current.offsetLeft && snareNote1.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote2.current.offsetLeft && snareNote2.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote3.current.offsetLeft && snareNote3.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote4.current.offsetLeft && snareNote4.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote5.current.offsetLeft && snareNote5.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote6.current.offsetLeft && snareNote6.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote7.current.offsetLeft && snareNote7.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote8.current.offsetLeft && snareNote8.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote9.current.offsetLeft && snareNote9.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote10.current.offsetLeft && snareNote10.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote11.current.offsetLeft && snareNote11.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote12.current.offsetLeft && snareNote12.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote13.current.offsetLeft && snareNote13.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote14.current.offsetLeft && snareNote14.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote15.current.offsetLeft && snareNote15.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote16.current.offsetLeft && snareNote16.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote17.current.offsetLeft && snareNote17.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote18.current.offsetLeft && snareNote18.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote19.current.offsetLeft && snareNote19.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote20.current.offsetLeft && snareNote20.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote21.current.offsetLeft && snareNote21.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote22.current.offsetLeft && snareNote22.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote23.current.offsetLeft && snareNote23.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote24.current.offsetLeft && snareNote24.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote25.current.offsetLeft && snareNote25.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote26.current.offsetLeft && snareNote26.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote27.current.offsetLeft && snareNote27.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote28.current.offsetLeft && snareNote28.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote29.current.offsetLeft && snareNote29.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote30.current.offsetLeft && snareNote30.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote31.current.offsetLeft && snareNote31.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote32.current.offsetLeft && snareNote32.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote33.current.offsetLeft && snareNote33.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote34.current.offsetLeft && snareNote34.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote35.current.offsetLeft && snareNote35.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote36.current.offsetLeft && snareNote36.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote37.current.offsetLeft && snareNote37.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote38.current.offsetLeft && snareNote38.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote39.current.offsetLeft && snareNote39.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote40.current.offsetLeft && snareNote40.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote41.current.offsetLeft && snareNote41.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote42.current.offsetLeft && snareNote42.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote43.current.offsetLeft && snareNote43.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote44.current.offsetLeft && snareNote44.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote45.current.offsetLeft && snareNote45.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote46.current.offsetLeft && snareNote46.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote47.current.offsetLeft && snareNote47.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote48.current.offsetLeft && snareNote48.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote49.current.offsetLeft && snareNote49.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote50.current.offsetLeft && snareNote50.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote51.current.offsetLeft && snareNote51.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote52.current.offsetLeft && snareNote52.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote53.current.offsetLeft && snareNote53.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote54.current.offsetLeft && snareNote54.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote55.current.offsetLeft && snareNote55.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote56.current.offsetLeft && snareNote56.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote57.current.offsetLeft && snareNote57.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote58.current.offsetLeft && snareNote58.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote59.current.offsetLeft && snareNote59.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote60.current.offsetLeft && snareNote60.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote61.current.offsetLeft && snareNote61.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote62.current.offsetLeft && snareNote62.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote63.current.offsetLeft && snareNote63.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }else if (progressBar.current.offsetLeft === snareNote64.current.offsetLeft && snareNote64.current.style.backgroundColor === "red"){
            const snareBeat = new Audio(snare)
            snareBeat.play()
        }

        // tom1
        if(progressBar.current.offsetLeft === tom1Note1.current.offsetLeft && tom1Note1.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note2.current.offsetLeft && tom1Note2.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note3.current.offsetLeft && tom1Note3.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note4.current.offsetLeft && tom1Note4.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note5.current.offsetLeft && tom1Note5.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note6.current.offsetLeft && tom1Note6.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note7.current.offsetLeft && tom1Note7.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note8.current.offsetLeft && tom1Note8.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note9.current.offsetLeft && tom1Note9.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note10.current.offsetLeft && tom1Note10.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note11.current.offsetLeft && tom1Note11.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note12.current.offsetLeft && tom1Note12.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note13.current.offsetLeft && tom1Note13.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note14.current.offsetLeft && tom1Note14.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note15.current.offsetLeft && tom1Note15.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note16.current.offsetLeft && tom1Note16.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note17.current.offsetLeft && tom1Note17.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note18.current.offsetLeft && tom1Note18.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note19.current.offsetLeft && tom1Note19.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note20.current.offsetLeft && tom1Note20.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note21.current.offsetLeft && tom1Note21.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note22.current.offsetLeft && tom1Note22.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note23.current.offsetLeft && tom1Note23.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note24.current.offsetLeft && tom1Note24.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note25.current.offsetLeft && tom1Note25.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note26.current.offsetLeft && tom1Note26.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note27.current.offsetLeft && tom1Note27.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note28.current.offsetLeft && tom1Note28.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note29.current.offsetLeft && tom1Note29.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note30.current.offsetLeft && tom1Note30.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note31.current.offsetLeft && tom1Note31.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note32.current.offsetLeft && tom1Note32.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note33.current.offsetLeft && tom1Note33.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note34.current.offsetLeft && tom1Note34.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note35.current.offsetLeft && tom1Note35.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note36.current.offsetLeft && tom1Note36.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note37.current.offsetLeft && tom1Note37.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note38.current.offsetLeft && tom1Note38.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note39.current.offsetLeft && tom1Note39.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note40.current.offsetLeft && tom1Note40.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note41.current.offsetLeft && tom1Note41.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note42.current.offsetLeft && tom1Note42.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note43.current.offsetLeft && tom1Note43.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note44.current.offsetLeft && tom1Note44.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note45.current.offsetLeft && tom1Note45.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note46.current.offsetLeft && tom1Note46.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note47.current.offsetLeft && tom1Note47.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note48.current.offsetLeft && tom1Note48.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note49.current.offsetLeft && tom1Note49.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note50.current.offsetLeft && tom1Note50.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note51.current.offsetLeft && tom1Note51.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note52.current.offsetLeft && tom1Note52.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note53.current.offsetLeft && tom1Note53.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note54.current.offsetLeft && tom1Note54.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note55.current.offsetLeft && tom1Note55.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note56.current.offsetLeft && tom1Note56.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note57.current.offsetLeft && tom1Note57.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note58.current.offsetLeft && tom1Note58.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note59.current.offsetLeft && tom1Note59.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note60.current.offsetLeft && tom1Note60.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note61.current.offsetLeft && tom1Note61.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note62.current.offsetLeft && tom1Note62.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note63.current.offsetLeft && tom1Note63.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom1Note64.current.offsetLeft && tom1Note64.current.style.backgroundColor === "yellow"){
            const tomBeat = new Audio(smallTom)
            tomBeat.play()
        }

        // tom2
        if(progressBar.current.offsetLeft === tom2Note1.current.offsetLeft && tom2Note1.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note2.current.offsetLeft && tom2Note2.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note3.current.offsetLeft && tom2Note3.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note4.current.offsetLeft && tom2Note4.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note5.current.offsetLeft && tom2Note5.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note6.current.offsetLeft && tom2Note6.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note7.current.offsetLeft && tom2Note7.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note8.current.offsetLeft && tom2Note8.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note9.current.offsetLeft && tom2Note9.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note10.current.offsetLeft && tom2Note10.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note11.current.offsetLeft && tom2Note11.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note12.current.offsetLeft && tom2Note12.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note13.current.offsetLeft && tom2Note13.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note14.current.offsetLeft && tom2Note14.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note15.current.offsetLeft && tom2Note15.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note16.current.offsetLeft && tom2Note16.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note17.current.offsetLeft && tom2Note17.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note18.current.offsetLeft && tom2Note18.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note19.current.offsetLeft && tom2Note19.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note20.current.offsetLeft && tom2Note20.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note21.current.offsetLeft && tom2Note21.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note22.current.offsetLeft && tom2Note22.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note23.current.offsetLeft && tom2Note23.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note24.current.offsetLeft && tom2Note24.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note25.current.offsetLeft && tom2Note25.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note26.current.offsetLeft && tom2Note26.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note27.current.offsetLeft && tom2Note27.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note28.current.offsetLeft && tom2Note28.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note29.current.offsetLeft && tom2Note29.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note30.current.offsetLeft && tom2Note30.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note31.current.offsetLeft && tom2Note31.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note32.current.offsetLeft && tom2Note32.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note33.current.offsetLeft && tom2Note33.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note34.current.offsetLeft && tom2Note34.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note35.current.offsetLeft && tom2Note35.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note36.current.offsetLeft && tom2Note36.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note37.current.offsetLeft && tom2Note37.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note38.current.offsetLeft && tom2Note38.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note39.current.offsetLeft && tom2Note39.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note40.current.offsetLeft && tom2Note40.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note41.current.offsetLeft && tom2Note41.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note42.current.offsetLeft && tom2Note42.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note43.current.offsetLeft && tom2Note43.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note44.current.offsetLeft && tom2Note44.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note45.current.offsetLeft && tom2Note45.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note46.current.offsetLeft && tom2Note46.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note47.current.offsetLeft && tom2Note47.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note48.current.offsetLeft && tom2Note48.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note49.current.offsetLeft && tom2Note49.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note50.current.offsetLeft && tom2Note50.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note51.current.offsetLeft && tom2Note51.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note52.current.offsetLeft && tom2Note52.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note53.current.offsetLeft && tom2Note53.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note54.current.offsetLeft && tom2Note54.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note55.current.offsetLeft && tom2Note55.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note56.current.offsetLeft && tom2Note56.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note57.current.offsetLeft && tom2Note57.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note58.current.offsetLeft && tom2Note58.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note59.current.offsetLeft && tom2Note59.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note60.current.offsetLeft && tom2Note60.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note61.current.offsetLeft && tom2Note61.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note62.current.offsetLeft && tom2Note62.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note63.current.offsetLeft && tom2Note63.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === tom2Note64.current.offsetLeft && tom2Note64.current.style.backgroundColor === "purple"){
            const tomBeat = new Audio(medTom)
            tomBeat.play()
        }

        // floor tom
        if(progressBar.current.offsetLeft === floorTom1.current.offsetLeft && floorTom1.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom2.current.offsetLeft && floorTom2.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom3.current.offsetLeft && floorTom3.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom4.current.offsetLeft && floorTom4.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom5.current.offsetLeft && floorTom5.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom6.current.offsetLeft && floorTom6.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom7.current.offsetLeft && floorTom7.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom8.current.offsetLeft && floorTom8.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom9.current.offsetLeft && floorTom9.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom10.current.offsetLeft && floorTom10.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom11.current.offsetLeft && floorTom11.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom12.current.offsetLeft && floorTom12.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom13.current.offsetLeft && floorTom13.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom14.current.offsetLeft && floorTom14.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom15.current.offsetLeft && floorTom15.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom16.current.offsetLeft && floorTom16.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom17.current.offsetLeft && floorTom17.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom18.current.offsetLeft && floorTom18.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom19.current.offsetLeft && floorTom19.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom20.current.offsetLeft && floorTom20.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom21.current.offsetLeft && floorTom21.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom22.current.offsetLeft && floorTom22.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom23.current.offsetLeft && floorTom23.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom24.current.offsetLeft && floorTom24.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom25.current.offsetLeft && floorTom25.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom26.current.offsetLeft && floorTom26.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom27.current.offsetLeft && floorTom27.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom28.current.offsetLeft && floorTom28.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom29.current.offsetLeft && floorTom29.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom30.current.offsetLeft && floorTom30.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom31.current.offsetLeft && floorTom31.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom32.current.offsetLeft && floorTom32.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom33.current.offsetLeft && floorTom33.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom34.current.offsetLeft && floorTom34.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom35.current.offsetLeft && floorTom35.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom36.current.offsetLeft && floorTom36.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom37.current.offsetLeft && floorTom37.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom38.current.offsetLeft && floorTom38.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom39.current.offsetLeft && floorTom39.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom40.current.offsetLeft && floorTom40.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom41.current.offsetLeft && floorTom41.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom42.current.offsetLeft && floorTom42.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom43.current.offsetLeft && floorTom43.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom44.current.offsetLeft && floorTom44.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom45.current.offsetLeft && floorTom45.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom46.current.offsetLeft && floorTom46.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom47.current.offsetLeft && floorTom47.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom48.current.offsetLeft && floorTom48.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom49.current.offsetLeft && floorTom49.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom50.current.offsetLeft && floorTom50.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom51.current.offsetLeft && floorTom51.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom52.current.offsetLeft && floorTom52.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom53.current.offsetLeft && floorTom53.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom54.current.offsetLeft && floorTom54.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom55.current.offsetLeft && floorTom55.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom56.current.offsetLeft && floorTom56.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom57.current.offsetLeft && floorTom57.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom58.current.offsetLeft && floorTom58.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom59.current.offsetLeft && floorTom59.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom60.current.offsetLeft && floorTom60.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom61.current.offsetLeft && floorTom61.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom62.current.offsetLeft && floorTom62.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom63.current.offsetLeft && floorTom63.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }else if (progressBar.current.offsetLeft === floorTom64.current.offsetLeft && floorTom64.current.style.backgroundColor === "green"){
            const tomBeat = new Audio(floorTom)
            tomBeat.play()
        }

        // high hat closed
        if(progressBar.current.offsetLeft === hiHat1.current.offsetLeft && hiHat1.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat2.current.offsetLeft && hiHat2.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat3.current.offsetLeft && hiHat3.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat4.current.offsetLeft && hiHat4.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat5.current.offsetLeft && hiHat5.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat6.current.offsetLeft && hiHat6.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat7.current.offsetLeft && hiHat7.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat8.current.offsetLeft && hiHat8.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat9.current.offsetLeft && hiHat9.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat10.current.offsetLeft && hiHat10.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat11.current.offsetLeft && hiHat11.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat12.current.offsetLeft && hiHat12.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat13.current.offsetLeft && hiHat13.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat14.current.offsetLeft && hiHat14.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat15.current.offsetLeft && hiHat15.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat16.current.offsetLeft && hiHat16.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat17.current.offsetLeft && hiHat17.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat18.current.offsetLeft && hiHat18.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat19.current.offsetLeft && hiHat19.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat20.current.offsetLeft && hiHat20.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat21.current.offsetLeft && hiHat21.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat22.current.offsetLeft && hiHat22.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat23.current.offsetLeft && hiHat23.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat24.current.offsetLeft && hiHat24.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat25.current.offsetLeft && hiHat25.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat26.current.offsetLeft && hiHat26.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat27.current.offsetLeft && hiHat27.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat28.current.offsetLeft && hiHat28.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat29.current.offsetLeft && hiHat29.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat30.current.offsetLeft && hiHat30.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat31.current.offsetLeft && hiHat31.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat32.current.offsetLeft && hiHat32.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat33.current.offsetLeft && hiHat33.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat34.current.offsetLeft && hiHat34.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat35.current.offsetLeft && hiHat35.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat36.current.offsetLeft && hiHat36.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat37.current.offsetLeft && hiHat37.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat38.current.offsetLeft && hiHat38.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat39.current.offsetLeft && hiHat39.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat40.current.offsetLeft && hiHat40.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat41.current.offsetLeft && hiHat41.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat42.current.offsetLeft && hiHat42.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat43.current.offsetLeft && hiHat43.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat44.current.offsetLeft && hiHat44.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat45.current.offsetLeft && hiHat45.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat46.current.offsetLeft && hiHat46.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat47.current.offsetLeft && hiHat47.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat48.current.offsetLeft && hiHat48.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat49.current.offsetLeft && hiHat49.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat50.current.offsetLeft && hiHat50.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat51.current.offsetLeft && hiHat51.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat52.current.offsetLeft && hiHat52.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat53.current.offsetLeft && hiHat53.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat54.current.offsetLeft && hiHat54.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat55.current.offsetLeft && hiHat55.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat56.current.offsetLeft && hiHat56.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat57.current.offsetLeft && hiHat57.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat58.current.offsetLeft && hiHat58.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat59.current.offsetLeft && hiHat59.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat60.current.offsetLeft && hiHat60.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat61.current.offsetLeft && hiHat61.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat62.current.offsetLeft && hiHat62.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat63.current.offsetLeft && hiHat63.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat64.current.offsetLeft && hiHat64.current.style.backgroundColor === "violet"){
            const hiHatBeat = new Audio(hiHatClosed)
            hiHatBeat.play()
        }
        // high hat 
        if(progressBar.current.offsetLeft === hiHat1.current.offsetLeft && hiHat1.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat2.current.offsetLeft && hiHat2.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat3.current.offsetLeft && hiHat3.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat4.current.offsetLeft && hiHat4.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat5.current.offsetLeft && hiHat5.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat6.current.offsetLeft && hiHat6.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat7.current.offsetLeft && hiHat7.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat8.current.offsetLeft && hiHat8.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat9.current.offsetLeft && hiHat9.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat10.current.offsetLeft && hiHat10.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat11.current.offsetLeft && hiHat11.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat12.current.offsetLeft && hiHat12.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat13.current.offsetLeft && hiHat13.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat14.current.offsetLeft && hiHat14.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat15.current.offsetLeft && hiHat15.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat16.current.offsetLeft && hiHat16.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat17.current.offsetLeft && hiHat17.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat18.current.offsetLeft && hiHat18.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat19.current.offsetLeft && hiHat19.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat20.current.offsetLeft && hiHat20.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat21.current.offsetLeft && hiHat21.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat22.current.offsetLeft && hiHat22.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat23.current.offsetLeft && hiHat23.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat24.current.offsetLeft && hiHat24.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat25.current.offsetLeft && hiHat25.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat26.current.offsetLeft && hiHat26.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat27.current.offsetLeft && hiHat27.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat28.current.offsetLeft && hiHat28.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat29.current.offsetLeft && hiHat29.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat30.current.offsetLeft && hiHat30.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat31.current.offsetLeft && hiHat31.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat32.current.offsetLeft && hiHat32.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat33.current.offsetLeft && hiHat33.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat34.current.offsetLeft && hiHat34.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat35.current.offsetLeft && hiHat35.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat36.current.offsetLeft && hiHat36.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat37.current.offsetLeft && hiHat37.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat38.current.offsetLeft && hiHat38.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat39.current.offsetLeft && hiHat39.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat40.current.offsetLeft && hiHat40.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat41.current.offsetLeft && hiHat41.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat42.current.offsetLeft && hiHat42.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat43.current.offsetLeft && hiHat43.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat44.current.offsetLeft && hiHat44.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat45.current.offsetLeft && hiHat45.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat46.current.offsetLeft && hiHat46.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat47.current.offsetLeft && hiHat47.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat48.current.offsetLeft && hiHat48.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat49.current.offsetLeft && hiHat49.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat50.current.offsetLeft && hiHat50.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat51.current.offsetLeft && hiHat51.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat52.current.offsetLeft && hiHat52.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat53.current.offsetLeft && hiHat53.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat54.current.offsetLeft && hiHat54.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat55.current.offsetLeft && hiHat55.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat56.current.offsetLeft && hiHat56.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat57.current.offsetLeft && hiHat57.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat58.current.offsetLeft && hiHat58.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat59.current.offsetLeft && hiHat59.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat60.current.offsetLeft && hiHat60.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat61.current.offsetLeft && hiHat61.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat62.current.offsetLeft && hiHat62.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat63.current.offsetLeft && hiHat63.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }else if (progressBar.current.offsetLeft === hiHat64.current.offsetLeft && hiHat64.current.style.backgroundColor === "black"){
            const hiHatBeat = new Audio(hiHatOpen)
            hiHatBeat.play()
        }

        // crash
        if(progressBar.current.offsetLeft === crash1.current.offsetLeft && crash1.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash2.current.offsetLeft && crash2.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash3.current.offsetLeft && crash3.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash4.current.offsetLeft && crash4.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash5.current.offsetLeft && crash5.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash6.current.offsetLeft && crash6.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash7.current.offsetLeft && crash7.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash8.current.offsetLeft && crash8.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash9.current.offsetLeft && crash9.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash10.current.offsetLeft && crash10.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash11.current.offsetLeft && crash11.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash12.current.offsetLeft && crash12.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash13.current.offsetLeft && crash13.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash14.current.offsetLeft && crash14.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash15.current.offsetLeft && crash15.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash16.current.offsetLeft && crash16.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash17.current.offsetLeft && crash17.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash18.current.offsetLeft && crash18.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash19.current.offsetLeft && crash19.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash20.current.offsetLeft && crash20.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash21.current.offsetLeft && crash21.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash22.current.offsetLeft && crash22.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash23.current.offsetLeft && crash23.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash24.current.offsetLeft && crash24.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash25.current.offsetLeft && crash25.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash26.current.offsetLeft && crash26.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash27.current.offsetLeft && crash27.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash28.current.offsetLeft && crash28.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash29.current.offsetLeft && crash29.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash30.current.offsetLeft && crash30.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash31.current.offsetLeft && crash31.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash32.current.offsetLeft && crash32.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash33.current.offsetLeft && crash33.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash34.current.offsetLeft && crash34.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash35.current.offsetLeft && crash35.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash36.current.offsetLeft && crash36.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash37.current.offsetLeft && crash37.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash38.current.offsetLeft && crash38.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash39.current.offsetLeft && crash39.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash40.current.offsetLeft && crash40.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash41.current.offsetLeft && crash41.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash42.current.offsetLeft && crash42.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash43.current.offsetLeft && crash43.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash44.current.offsetLeft && crash44.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash45.current.offsetLeft && crash45.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash46.current.offsetLeft && crash46.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash47.current.offsetLeft && crash47.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash48.current.offsetLeft && crash48.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash49.current.offsetLeft && crash49.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash50.current.offsetLeft && crash50.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash51.current.offsetLeft && crash51.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash52.current.offsetLeft && crash52.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash53.current.offsetLeft && crash53.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash54.current.offsetLeft && crash54.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash55.current.offsetLeft && crash55.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash56.current.offsetLeft && crash56.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash57.current.offsetLeft && crash57.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash58.current.offsetLeft && crash58.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash59.current.offsetLeft && crash59.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash60.current.offsetLeft && crash60.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash61.current.offsetLeft && crash61.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash62.current.offsetLeft && crash62.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash63.current.offsetLeft && crash63.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }else if (progressBar.current.offsetLeft === crash64.current.offsetLeft && crash64.current.style.backgroundColor === "orange"){
            const crashBeat = new Audio(crash)
            crashBeat.play()
        }

        // ride
        if(progressBar.current.offsetLeft === ride1.current.offsetLeft && ride1.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride2.current.offsetLeft && ride2.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride3.current.offsetLeft && ride3.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride4.current.offsetLeft && ride4.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride5.current.offsetLeft && ride5.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride6.current.offsetLeft && ride6.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride7.current.offsetLeft && ride7.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride8.current.offsetLeft && ride8.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride9.current.offsetLeft && ride9.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride10.current.offsetLeft && ride10.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride11.current.offsetLeft && ride11.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride12.current.offsetLeft && ride12.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride13.current.offsetLeft && ride13.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride14.current.offsetLeft && ride14.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride15.current.offsetLeft && ride15.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride16.current.offsetLeft && ride16.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride17.current.offsetLeft && ride17.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride18.current.offsetLeft && ride18.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride19.current.offsetLeft && ride19.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride20.current.offsetLeft && ride20.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride21.current.offsetLeft && ride21.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride22.current.offsetLeft && ride22.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride23.current.offsetLeft && ride23.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride24.current.offsetLeft && ride24.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride25.current.offsetLeft && ride25.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride26.current.offsetLeft && ride26.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride27.current.offsetLeft && ride27.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride28.current.offsetLeft && ride28.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride29.current.offsetLeft && ride29.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride30.current.offsetLeft && ride30.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride31.current.offsetLeft && ride31.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride32.current.offsetLeft && ride32.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride33.current.offsetLeft && ride33.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride34.current.offsetLeft && ride34.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride35.current.offsetLeft && ride35.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride36.current.offsetLeft && ride36.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride37.current.offsetLeft && ride37.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride38.current.offsetLeft && ride38.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride39.current.offsetLeft && ride39.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride40.current.offsetLeft && ride40.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride41.current.offsetLeft && ride41.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride42.current.offsetLeft && ride42.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride43.current.offsetLeft && ride43.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride44.current.offsetLeft && ride44.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride45.current.offsetLeft && ride45.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride46.current.offsetLeft && ride46.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride47.current.offsetLeft && ride47.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride48.current.offsetLeft && ride48.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride49.current.offsetLeft && ride49.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride50.current.offsetLeft && ride50.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride51.current.offsetLeft && ride51.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride52.current.offsetLeft && ride52.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride53.current.offsetLeft && ride53.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride54.current.offsetLeft && ride54.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride55.current.offsetLeft && ride55.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride56.current.offsetLeft && ride56.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride57.current.offsetLeft && ride57.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride58.current.offsetLeft && ride58.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride59.current.offsetLeft && ride59.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride60.current.offsetLeft && ride60.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride61.current.offsetLeft && ride61.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride62.current.offsetLeft && ride62.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride63.current.offsetLeft && ride63.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }else if (progressBar.current.offsetLeft === ride64.current.offsetLeft && ride64.current.style.backgroundColor === "brown"){
            const rideBeat = new Audio(ride)
            rideBeat.play()
        }

    }

    function togglePlayPause() {
        const prevValue = playing;
        setPlaying(!prevValue);
        if (!prevValue) {
            setPlaying(setInterval(moveProgressBar,speed)) 
        } else {
            clearInterval(playing)
            setPlaying(null) 
        }
    }

    function handleReset(){
        progressBar.current.style.left = -1 + "px"
    }


    function handleChange(event){
      setSpeed(event.currentTarget.value)
    }

    function activeKick(event){
        if(event.currentTarget.style.backgroundColor === 'white'){
            event.currentTarget.style.backgroundColor = 'blue'
        }else if(event.currentTarget.style.backgroundColor === 'blue'){
            event.currentTarget.style.backgroundColor = 'white'
        }
        else{
            event.currentTarget.style.backgroundColor = 'blue'
        }
    };
    function activeSnare(event){
        if(event.currentTarget.style.backgroundColor === 'white'){
            event.currentTarget.style.backgroundColor = 'red'
        }else if(event.currentTarget.style.backgroundColor === 'red'){
            event.currentTarget.style.backgroundColor = 'white'
        }
        else{
            event.currentTarget.style.backgroundColor = 'red'
        }
    };
    function activeTom1(event){
        if(event.currentTarget.style.backgroundColor === 'white'){
            event.currentTarget.style.backgroundColor = 'yellow'
        }else if(event.currentTarget.style.backgroundColor === 'yellow'){
            event.currentTarget.style.backgroundColor = 'white'
        }
        else{
            event.currentTarget.style.backgroundColor = 'yellow'
        }
    };
    function activeTom2(event){
        if(event.currentTarget.style.backgroundColor === 'white'){
            event.currentTarget.style.backgroundColor = 'purple'
        }else if(event.currentTarget.style.backgroundColor === 'purple'){
            event.currentTarget.style.backgroundColor = 'white'
        }
        else{
            event.currentTarget.style.backgroundColor = 'purple'
        }
    };
    function activeFloorTom(event){
        if(event.currentTarget.style.backgroundColor === 'white'){
            event.currentTarget.style.backgroundColor = 'green'
        }else if(event.currentTarget.style.backgroundColor === 'green'){
            event.currentTarget.style.backgroundColor = 'white'
        }
        else{
            event.currentTarget.style.backgroundColor = 'green'
        }
    };
    function activeHiHat(event){
        if(event.currentTarget.style.backgroundColor === 'white'){
            event.currentTarget.style.backgroundColor = 'violet'
        }else if(event.currentTarget.style.backgroundColor === 'violet'){
            event.currentTarget.style.backgroundColor = 'black'
        }else if(event.currentTarget.style.backgroundColor === 'black'){
            event.currentTarget.style.backgroundColor = 'white'
        }
        else{
            event.currentTarget.style.backgroundColor = 'violet'
        }
    };
    function activeCrash(event){
        if(event.currentTarget.style.backgroundColor === 'white'){
            event.currentTarget.style.backgroundColor = 'orange'
        }else if(event.currentTarget.style.backgroundColor === 'orange'){
            event.currentTarget.style.backgroundColor = 'white'
        }
        else{
            event.currentTarget.style.backgroundColor = 'orange'
        }
    };
    function activeRide(event){
        if(event.currentTarget.style.backgroundColor === 'white'){
            event.currentTarget.style.backgroundColor = 'brown'
        }else if(event.currentTarget.style.backgroundColor === 'brown'){
            event.currentTarget.style.backgroundColor = 'white'
        }
        else{
            event.currentTarget.style.backgroundColor = 'brown'
        }
    };
    

    

  return (
    <div className='Player'>
        <div className='PlayerContainer'>
            <div className='Labels'>
                <div className='TrackLabel'>Kick</div>
                <div className='TrackLabel'>Snare</div>
                <div className='TrackLabel'>Tom 1</div>
                <div className='TrackLabel'>Tom 2</div>
                <div className='TrackLabel'>FloorTom</div>
                <div className='TrackLabel'>Hi-Hat</div>
                <div className='TrackLabel'>Crash</div>
                <div className='TrackLabel'>Ride</div>
            </div>
        <div className='TrackContainer' ref={trackContainer}>
            <div className='ProgressBar'style={{"left":"-1px"}} ref={progressBar} />
            <div className='TrackGrid'>
                {/* kick */}
                <div className='Track' ref={trackRef}>
                    <div onClick={activeKick} className='Note' ref={kickNote1}/>
                    <div onClick={activeKick} className='Note' ref={kickNote2}/>
                    <div onClick={activeKick} className='Note' ref={kickNote3}/>
                    <div onClick={activeKick} className='Note' ref={kickNote4}/>
                    <div onClick={activeKick} className='Note' ref={kickNote5}/>
                    <div onClick={activeKick} className='Note' ref={kickNote6}/>
                    <div onClick={activeKick} className='Note' ref={kickNote7}/>
                    <div onClick={activeKick} className='Note' ref={kickNote8}/>
                    <div onClick={activeKick} className='Note' ref={kickNote9}/>
                    <div onClick={activeKick} className='Note' ref={kickNote10}/>
                    <div onClick={activeKick} className='Note' ref={kickNote11}/>
                    <div onClick={activeKick} className='Note' ref={kickNote12}/>
                    <div onClick={activeKick} className='Note' ref={kickNote13}/>
                    <div onClick={activeKick} className='Note' ref={kickNote14}/>
                    <div onClick={activeKick} className='Note' ref={kickNote15}/>
                    <div onClick={activeKick} className='Note' ref={kickNote16}/>
                    <div onClick={activeKick} className='Note' ref={kickNote17}/>
                    <div onClick={activeKick} className='Note' ref={kickNote18}/>
                    <div onClick={activeKick} className='Note' ref={kickNote19}/>
                    <div onClick={activeKick} className='Note' ref={kickNote20}/>
                    <div onClick={activeKick} className='Note' ref={kickNote21}/>
                    <div onClick={activeKick} className='Note' ref={kickNote22}/>
                    <div onClick={activeKick} className='Note' ref={kickNote23}/>
                    <div onClick={activeKick} className='Note' ref={kickNote24}/>
                    <div onClick={activeKick} className='Note' ref={kickNote25}/>
                    <div onClick={activeKick} className='Note' ref={kickNote26}/>
                    <div onClick={activeKick} className='Note' ref={kickNote27}/>
                    <div onClick={activeKick} className='Note' ref={kickNote28}/>
                    <div onClick={activeKick} className='Note' ref={kickNote29}/>
                    <div onClick={activeKick} className='Note' ref={kickNote30}/>
                    <div onClick={activeKick} className='Note' ref={kickNote31}/>
                    <div onClick={activeKick} className='Note' ref={kickNote32}/>
                    <div onClick={activeKick} className='Note' ref={kickNote33}/>
                    <div onClick={activeKick} className='Note' ref={kickNote34}/>
                    <div onClick={activeKick} className='Note' ref={kickNote35}/>
                    <div onClick={activeKick} className='Note' ref={kickNote36}/>
                    <div onClick={activeKick} className='Note' ref={kickNote37}/>
                    <div onClick={activeKick} className='Note' ref={kickNote38}/>
                    <div onClick={activeKick} className='Note' ref={kickNote39}/>
                    <div onClick={activeKick} className='Note' ref={kickNote40}/>
                    <div onClick={activeKick} className='Note' ref={kickNote41}/>
                    <div onClick={activeKick} className='Note' ref={kickNote42}/>
                    <div onClick={activeKick} className='Note' ref={kickNote43}/>
                    <div onClick={activeKick} className='Note' ref={kickNote44}/>
                    <div onClick={activeKick} className='Note' ref={kickNote45}/>
                    <div onClick={activeKick} className='Note' ref={kickNote46}/>
                    <div onClick={activeKick} className='Note' ref={kickNote47}/>
                    <div onClick={activeKick} className='Note' ref={kickNote48}/>
                    <div onClick={activeKick} className='Note' ref={kickNote49}/>
                    <div onClick={activeKick} className='Note' ref={kickNote50}/>
                    <div onClick={activeKick} className='Note' ref={kickNote51}/>
                    <div onClick={activeKick} className='Note' ref={kickNote52}/>
                    <div onClick={activeKick} className='Note' ref={kickNote53}/>
                    <div onClick={activeKick} className='Note' ref={kickNote54}/>
                    <div onClick={activeKick} className='Note' ref={kickNote55}/>
                    <div onClick={activeKick} className='Note' ref={kickNote56}/>
                    <div onClick={activeKick} className='Note' ref={kickNote57}/>
                    <div onClick={activeKick} className='Note' ref={kickNote58}/>
                    <div onClick={activeKick} className='Note' ref={kickNote59}/>
                    <div onClick={activeKick} className='Note' ref={kickNote60}/>
                    <div onClick={activeKick} className='Note' ref={kickNote61}/>
                    <div onClick={activeKick} className='Note' ref={kickNote62}/>
                    <div onClick={activeKick} className='Note' ref={kickNote63}/>
                    <div onClick={activeKick} className='Note' ref={kickNote64}/> 
                </div>
                {/* snare */}
                <div className='Track' ref={trackRef}>
                    <div onClick={activeSnare} className='Note' ref={snareNote1}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote2}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote3}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote4}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote5}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote6}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote7}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote8}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote9}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote10}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote11}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote12}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote13}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote14}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote15}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote16}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote17}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote18}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote19}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote20}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote21}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote22}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote23}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote24}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote25}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote26}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote27}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote28}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote29}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote30}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote31}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote32}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote33}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote34}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote35}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote36}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote37}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote38}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote39}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote40}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote41}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote42}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote43}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote44}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote45}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote46}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote47}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote48}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote49}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote50}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote51}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote52}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote53}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote54}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote55}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote56}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote57}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote58}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote59}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote60}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote61}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote62}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote63}/>
                    <div onClick={activeSnare} className='Note' ref={snareNote64}/> 
                </div>
                {/* tom1 */}
                <div className='Track' ref={trackRef}>
                    <div onClick={activeTom1} className='Note' ref={tom1Note1}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note2}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note3}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note4}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note5}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note6}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note7}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note8}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note9}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note10}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note11}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note12}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note13}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note14}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note15}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note16}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note17}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note18}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note19}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note20}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note21}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note22}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note23}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note24}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note25}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note26}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note27}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note28}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note29}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note30}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note31}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note32}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note33}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note34}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note35}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note36}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note37}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note38}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note39}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note40}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note41}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note42}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note43}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note44}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note45}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note46}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note47}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note48}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note49}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note50}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note51}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note52}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note53}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note54}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note55}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note56}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note57}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note58}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note59}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note60}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note61}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note62}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note63}/>
                    <div onClick={activeTom1} className='Note' ref={tom1Note64}/> 
                </div>
                {/* tom2 */}
                <div className='Track' ref={trackRef}>
                    <div onClick={activeTom2} className='Note' ref={tom2Note1}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note2}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note3}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note4}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note5}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note6}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note7}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note8}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note9}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note10}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note11}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note12}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note13}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note14}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note15}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note16}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note17}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note18}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note19}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note20}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note21}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note22}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note23}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note24}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note25}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note26}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note27}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note28}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note29}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note30}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note31}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note32}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note33}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note34}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note35}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note36}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note37}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note38}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note39}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note40}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note41}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note42}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note43}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note44}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note45}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note46}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note47}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note48}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note49}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note50}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note51}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note52}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note53}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note54}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note55}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note56}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note57}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note58}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note59}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note60}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note61}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note62}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note63}/>
                    <div onClick={activeTom2} className='Note' ref={tom2Note64}/> 
                </div>
                {/* floor tom */}
                <div className='Track' ref={trackRef}>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom1}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom2}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom3}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom4}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom5}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom6}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom7}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom8}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom9}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom10}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom11}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom12}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom13}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom14}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom15}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom16}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom17}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom18}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom19}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom20}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom21}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom22}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom23}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom24}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom25}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom26}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom27}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom28}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom29}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom30}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom31}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom32}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom33}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom34}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom35}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom36}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom37}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom38}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom39}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom40}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom41}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom42}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom43}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom44}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom45}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom46}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom47}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom48}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom49}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom50}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom51}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom52}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom53}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom54}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom55}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom56}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom57}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom58}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom59}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom60}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom61}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom62}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom63}/>
                    <div onClick={activeFloorTom} className='Note' ref={floorTom64}/> 
                </div>
                {/* hihat */}
                <div className='Track' ref={trackRef}>
                    <div onClick={activeHiHat} className='Note' ref={hiHat1}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat2}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat3}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat4}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat5}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat6}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat7}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat8}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat9}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat10}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat11}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat12}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat13}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat14}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat15}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat16}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat17}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat18}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat19}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat20}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat21}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat22}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat23}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat24}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat25}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat26}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat27}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat28}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat29}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat30}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat31}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat32}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat33}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat34}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat35}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat36}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat37}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat38}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat39}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat40}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat41}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat42}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat43}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat44}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat45}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat46}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat47}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat48}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat49}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat50}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat51}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat52}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat53}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat54}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat55}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat56}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat57}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat58}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat59}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat60}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat61}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat62}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat63}/>
                    <div onClick={activeHiHat} className='Note' ref={hiHat64}/> 
                </div>
                {/* crash */}
                <div className='Track' ref={trackRef}>
                    <div onClick={activeCrash} className='Note' ref={crash1}/>
                    <div onClick={activeCrash} className='Note' ref={crash2}/>
                    <div onClick={activeCrash} className='Note' ref={crash3}/>
                    <div onClick={activeCrash} className='Note' ref={crash4}/>
                    <div onClick={activeCrash} className='Note' ref={crash5}/>
                    <div onClick={activeCrash} className='Note' ref={crash6}/>
                    <div onClick={activeCrash} className='Note' ref={crash7}/>
                    <div onClick={activeCrash} className='Note' ref={crash8}/>
                    <div onClick={activeCrash} className='Note' ref={crash9}/>
                    <div onClick={activeCrash} className='Note' ref={crash10}/>
                    <div onClick={activeCrash} className='Note' ref={crash11}/>
                    <div onClick={activeCrash} className='Note' ref={crash12}/>
                    <div onClick={activeCrash} className='Note' ref={crash13}/>
                    <div onClick={activeCrash} className='Note' ref={crash14}/>
                    <div onClick={activeCrash} className='Note' ref={crash15}/>
                    <div onClick={activeCrash} className='Note' ref={crash16}/>
                    <div onClick={activeCrash} className='Note' ref={crash17}/>
                    <div onClick={activeCrash} className='Note' ref={crash18}/>
                    <div onClick={activeCrash} className='Note' ref={crash19}/>
                    <div onClick={activeCrash} className='Note' ref={crash20}/>
                    <div onClick={activeCrash} className='Note' ref={crash21}/>
                    <div onClick={activeCrash} className='Note' ref={crash22}/>
                    <div onClick={activeCrash} className='Note' ref={crash23}/>
                    <div onClick={activeCrash} className='Note' ref={crash24}/>
                    <div onClick={activeCrash} className='Note' ref={crash25}/>
                    <div onClick={activeCrash} className='Note' ref={crash26}/>
                    <div onClick={activeCrash} className='Note' ref={crash27}/>
                    <div onClick={activeCrash} className='Note' ref={crash28}/>
                    <div onClick={activeCrash} className='Note' ref={crash29}/>
                    <div onClick={activeCrash} className='Note' ref={crash30}/>
                    <div onClick={activeCrash} className='Note' ref={crash31}/>
                    <div onClick={activeCrash} className='Note' ref={crash32}/>
                    <div onClick={activeCrash} className='Note' ref={crash33}/>
                    <div onClick={activeCrash} className='Note' ref={crash34}/>
                    <div onClick={activeCrash} className='Note' ref={crash35}/>
                    <div onClick={activeCrash} className='Note' ref={crash36}/>
                    <div onClick={activeCrash} className='Note' ref={crash37}/>
                    <div onClick={activeCrash} className='Note' ref={crash38}/>
                    <div onClick={activeCrash} className='Note' ref={crash39}/>
                    <div onClick={activeCrash} className='Note' ref={crash40}/>
                    <div onClick={activeCrash} className='Note' ref={crash41}/>
                    <div onClick={activeCrash} className='Note' ref={crash42}/>
                    <div onClick={activeCrash} className='Note' ref={crash43}/>
                    <div onClick={activeCrash} className='Note' ref={crash44}/>
                    <div onClick={activeCrash} className='Note' ref={crash45}/>
                    <div onClick={activeCrash} className='Note' ref={crash46}/>
                    <div onClick={activeCrash} className='Note' ref={crash47}/>
                    <div onClick={activeCrash} className='Note' ref={crash48}/>
                    <div onClick={activeCrash} className='Note' ref={crash49}/>
                    <div onClick={activeCrash} className='Note' ref={crash50}/>
                    <div onClick={activeCrash} className='Note' ref={crash51}/>
                    <div onClick={activeCrash} className='Note' ref={crash52}/>
                    <div onClick={activeCrash} className='Note' ref={crash53}/>
                    <div onClick={activeCrash} className='Note' ref={crash54}/>
                    <div onClick={activeCrash} className='Note' ref={crash55}/>
                    <div onClick={activeCrash} className='Note' ref={crash56}/>
                    <div onClick={activeCrash} className='Note' ref={crash57}/>
                    <div onClick={activeCrash} className='Note' ref={crash58}/>
                    <div onClick={activeCrash} className='Note' ref={crash59}/>
                    <div onClick={activeCrash} className='Note' ref={crash60}/>
                    <div onClick={activeCrash} className='Note' ref={crash61}/>
                    <div onClick={activeCrash} className='Note' ref={crash62}/>
                    <div onClick={activeCrash} className='Note' ref={crash63}/>
                    <div onClick={activeCrash} className='Note' ref={crash64}/> 
                </div>
                {/* ride */}
                <div className='Track' ref={trackRef}>
                    <div onClick={activeRide} className='Note' ref={ride1}/>
                    <div onClick={activeRide} className='Note' ref={ride2}/>
                    <div onClick={activeRide} className='Note' ref={ride3}/>
                    <div onClick={activeRide} className='Note' ref={ride4}/>
                    <div onClick={activeRide} className='Note' ref={ride5}/>
                    <div onClick={activeRide} className='Note' ref={ride6}/>
                    <div onClick={activeRide} className='Note' ref={ride7}/>
                    <div onClick={activeRide} className='Note' ref={ride8}/>
                    <div onClick={activeRide} className='Note' ref={ride9}/>
                    <div onClick={activeRide} className='Note' ref={ride10}/>
                    <div onClick={activeRide} className='Note' ref={ride11}/>
                    <div onClick={activeRide} className='Note' ref={ride12}/>
                    <div onClick={activeRide} className='Note' ref={ride13}/>
                    <div onClick={activeRide} className='Note' ref={ride14}/>
                    <div onClick={activeRide} className='Note' ref={ride15}/>
                    <div onClick={activeRide} className='Note' ref={ride16}/>
                    <div onClick={activeRide} className='Note' ref={ride17}/>
                    <div onClick={activeRide} className='Note' ref={ride18}/>
                    <div onClick={activeRide} className='Note' ref={ride19}/>
                    <div onClick={activeRide} className='Note' ref={ride20}/>
                    <div onClick={activeRide} className='Note' ref={ride21}/>
                    <div onClick={activeRide} className='Note' ref={ride22}/>
                    <div onClick={activeRide} className='Note' ref={ride23}/>
                    <div onClick={activeRide} className='Note' ref={ride24}/>
                    <div onClick={activeRide} className='Note' ref={ride25}/>
                    <div onClick={activeRide} className='Note' ref={ride26}/>
                    <div onClick={activeRide} className='Note' ref={ride27}/>
                    <div onClick={activeRide} className='Note' ref={ride28}/>
                    <div onClick={activeRide} className='Note' ref={ride29}/>
                    <div onClick={activeRide} className='Note' ref={ride30}/>
                    <div onClick={activeRide} className='Note' ref={ride31}/>
                    <div onClick={activeRide} className='Note' ref={ride32}/>
                    <div onClick={activeRide} className='Note' ref={ride33}/>
                    <div onClick={activeRide} className='Note' ref={ride34}/>
                    <div onClick={activeRide} className='Note' ref={ride35}/>
                    <div onClick={activeRide} className='Note' ref={ride36}/>
                    <div onClick={activeRide} className='Note' ref={ride37}/>
                    <div onClick={activeRide} className='Note' ref={ride38}/>
                    <div onClick={activeRide} className='Note' ref={ride39}/>
                    <div onClick={activeRide} className='Note' ref={ride40}/>
                    <div onClick={activeRide} className='Note' ref={ride41}/>
                    <div onClick={activeRide} className='Note' ref={ride42}/>
                    <div onClick={activeRide} className='Note' ref={ride43}/>
                    <div onClick={activeRide} className='Note' ref={ride44}/>
                    <div onClick={activeRide} className='Note' ref={ride45}/>
                    <div onClick={activeRide} className='Note' ref={ride46}/>
                    <div onClick={activeRide} className='Note' ref={ride47}/>
                    <div onClick={activeRide} className='Note' ref={ride48}/>
                    <div onClick={activeRide} className='Note' ref={ride49}/>
                    <div onClick={activeRide} className='Note' ref={ride50}/>
                    <div onClick={activeRide} className='Note' ref={ride51}/>
                    <div onClick={activeRide} className='Note' ref={ride52}/>
                    <div onClick={activeRide} className='Note' ref={ride53}/>
                    <div onClick={activeRide} className='Note' ref={ride54}/>
                    <div onClick={activeRide} className='Note' ref={ride55}/>
                    <div onClick={activeRide} className='Note' ref={ride56}/>
                    <div onClick={activeRide} className='Note' ref={ride57}/>
                    <div onClick={activeRide} className='Note' ref={ride58}/>
                    <div onClick={activeRide} className='Note' ref={ride59}/>
                    <div onClick={activeRide} className='Note' ref={ride60}/>
                    <div onClick={activeRide} className='Note' ref={ride61}/>
                    <div onClick={activeRide} className='Note' ref={ride62}/>
                    <div onClick={activeRide} className='Note' ref={ride63}/>
                    <div onClick={activeRide} className='Note' ref={ride64}/> 
                </div>
            </div>
        </div>
        
        </div>
        <div className='ButtonsContainer'>
            <div className='Button'>
               <img style={{"cursor":"pointer"}} onClick={togglePlayPause} src={playing? Pause: Play} alt="play/pause"></img> 
               {
                playing ? <p style={{'margin':'0'}}>Pause</p> : <p style={{'margin':'0'}}>Play</p>
               }
            </div>
            <div className='Button'>
                <img style={{"cursor":"pointer"}} onClick={handleReset} src={Reset} alt="reset"></img>
                <p style={{'margin':'0'}}>Reset</p>
            </div>
            <div className='Button'>
                <input className="InputBox" onChange={handleChange} defaultValue={10}></input> 
                <p style={{'margin':'0'}}>Speed</p>
            </div>
        </div>
        <p>* The lower the number the higher the speed *</p>
        <p>* To apply the speed change pause the track and then resume * </p>
    </div>
  )
}

export default Player


