import { json } from "body-parser";
import db from "../models";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();


        return res.render("homePage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }

}

let getabout = (req, res) => {
    return res.render("about.ejs");
}
module.exports = {
    getHomePage: getHomePage,
    getabout: getabout,
}