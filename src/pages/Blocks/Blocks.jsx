import UiItem from "../../components/UiItem/UiItem"
import Skill from "../../components/Skill/Skill"

import blocksData from "./../../data/blocks/blocks.json";

export default function Blocks() {
    return (
        <div className="rv-uikit">
            <UiItem title="Skill">
                <Skill data={blocksData.skill}></Skill>
            </UiItem>
        </div>
    )
}