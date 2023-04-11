import { proxy } from "valtio";

export const initialStateObj = {
    color: '#d2a181',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './openai.png',
    fullDecal: './openai.png'
}

const state = proxy({
    intro: true,
    ...initialStateObj
})

export default state;