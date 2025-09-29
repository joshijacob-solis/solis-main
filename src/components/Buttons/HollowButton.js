import { Button } from "@mui/material";

export const HollowButton =(props)=>{
    return(
        <Button onClick={props.handleClick}>{props.children}</Button>
    )
}