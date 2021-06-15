import {RouteComponentProps} from "react-router-dom";
import {ICaterer} from "../../utils";

interface RouterProps{
    title:string;
}

export interface ICatererPage extends RouteComponentProps<RouterProps>{
    caterers:Array<ICaterer>
}