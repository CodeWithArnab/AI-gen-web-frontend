import {surpriseMePrompts} from "../constants"
import FileSaver from "file-saver"

export function getRandomPrompt(prompts){
    const randInd=Math.floor(Math.random()*surpriseMePrompts.length);

    const randProm=surpriseMePrompts[randInd];
    if(randProm===prompts) return getRandomPrompt(prompts);
    return randProm;

};
export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo,`download-${_id}.jpeg`)
}