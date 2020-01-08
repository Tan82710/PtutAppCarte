import React from 'react' 
import {Text} from 'react-native'

export const DoubleN = props =>
<Text>{props.name} distribue {props.n} gorgées puis rejoues</Text>

export const Double5 = props =>
<Text>{props.name} boit 1 gorgées et distribue 5 puis rejoues</Text>

export const Double6 = props =>
<Text>{props.name} si tu étais Pigeon, tu ne l'es plus et tu peux disbuer 6 gorgées puis rejoues</Text>

export const Double1 = () =>
<Text>Tournée générale, tout le monde boit 1 gorgée puis rejoues</Text>

export const Som5 = props =>
<Text>{props.name} choisit de faire un mini jeu ou invente une règle</Text>

export const Som7 = props =>
<Text>BISKIS ! Le dernier boit 1 gorgée, puis {props.name} rejoues</Text>

export const Som9 = props =>
<Text>{props.nameP} boit 1 gorgées puis {props.name} rejoues</Text>

export const Som10 = props =>
<Text>{props.name} boit 1 gorgées puis passe les dés</Text>

export const Som11 = props =>
<Text>{props.nameS} boit 1 gorgées puis {props.name}relance</Text>

export const NewPigeon = props =>
<Text>{props.name} devient pigeon, tu boit 1 gorgées et passe les dés</Text>

export const PigeonBois = props =>
<Text>{props.name} boit {props.n} gorgées</Text>

export const Passe = props =>
<Text>{props.name} passes ton tour</Text>
