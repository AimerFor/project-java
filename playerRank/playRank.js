const gamesname = ["women 1m springboard","women 3m springboard","women 10m platform", "men 1m springboard",
    "men 3m springboard","men 10m platform",];

const gamesname2 = ["women 3m synchronised","women 10m synchronised","men 3m synchronised",
    "men 10m synchronised"]

const gamesinfo =[women1mSpringboard,women3mSpringboard,women10mPlatform,
    men1mSpringboard,men3mSpringboard,men10mPlatform,];

const gamesinfo2 =[women3mSynchronised,women10mSynchronised,
    men3mSynchronised,men10mSynchronised];

window.onload = function(){


    for (let a = 0;a<gamesname.length;a++){
        let innercontent = "<tr>\n" +
            "                    <th>Overall Rank</th>\n" +
            "                    <th>Country</th>\n" +
            "                    <th>Athlete</th>\n" +
            "                    <th>Age</th>\n" +
            "                    <th>Points</th>\n" +
            "                 </tr>";
        const jsonObject = gamesinfo[a];
        const jsonArray = jsonObject["Heats"];
        const jsonObject1 = jsonArray[0];
        const jsonArray1 = jsonObject1["Results"];

        for (let i = 0; i < jsonArray1.length; i++) {
            const result = jsonArray1[i];
            const total = result["TotalPoints"];
            const fullName = result["FullName"];
            const rank = result["Rank"];
            const age = result["AthleteResultAge"];
            const country = result["NAT"];

            innercontent+="<tr>\n" +
                "       <td>"+rank+"</td>\n" +
                "       <td>"+country+"</td>\n" +
                "       <td>"+fullName+"</td>\n" +
                "       <td>"+age+"</td>\n" +
                "       <td>"+total+"</td>\n" +
                "     </tr>"
        }

        document.getElementById(gamesname[a]).innerHTML = innercontent;
    }
    for (let a = 0;a<gamesname2.length;a++){
        let innercontent = "<tr>\n" +
            "                    <th>Overall Rank</th>\n" +
            "                    <th>Country</th>\n" +
            "                    <th>Athlete</th>\n" +
            "                    <th>Age</th>\n" +
            "                    <th>Points</th>\n" +
            "                 </tr>";
        const jsonObject = gamesinfo2[a];
        const jsonArray = jsonObject["Heats"];
        const jsonObject1 = jsonArray[0];
        const jsonArray1 = jsonObject1["Results"];

        for (let i = 0; i < jsonArray1.length; i++) {
            const result = jsonArray1[i];
            const total = result["TotalPoints"];
            const fullName = result["FullName"];
            const rank = result["Rank"];
            const result1 = result["Competitors"];
            const age = result1[0]["AthleteResultAge"]+"/"+result1[1]["AthleteResultAge"];
            const country = result["NAT"];

            innercontent+="<tr>\n" +
                "       <td>"+rank+"</td>\n" +
                "       <td>"+country+"</td>\n" +
                "       <td>"+fullName+"</td>\n" +
                "       <td>"+age+"</td>\n" +
                "       <td>"+total+"</td>\n" +
                "     </tr>"
        }

        document.getElementById(gamesname2[a]).innerHTML = innercontent;
    }


}
