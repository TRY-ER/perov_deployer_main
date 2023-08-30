import "./style.css";
import React, { Suspense, useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { Html } from "@react-three/drei";
// import * as THREE from "three";



export function Predict_btn() {
    return (
        <>
            <a href="/predictor" >
                <button className="button_main" >Predict</button>
            </a>
        </>
    );
}
