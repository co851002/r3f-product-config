import { proxy } from "valtio";

export const initialStateObj = {
    color: '#81d2ba',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './openai.png',
    fullDecal: './openai.png',
    editorTabs: false
}

const state = proxy({
    intro: true,
    ...initialStateObj
})

export default state;