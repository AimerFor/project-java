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
            "                    <th>Pts Behind</th>\n" +
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
            const pts = result["PointsBehind"];

            innercontent+="<tr>\n" +
                "       <td>"+rank+"</td>\n" +
                "       <td>"+country+"</td>\n" +
                "       <td>"+fullName+"</td>\n" +
                "       <td>"+age+"</td>\n" +
                "       <td>"+total+"</td>\n" +
                "       <td>"+pts+"</td>\n" +
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
            "                    <th>Pts Behind</th>\n" +
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
            const pts = result["PointsBehind"];

            innercontent+="<tr>\n" +
                "       <td>"+rank+"</td>\n" +
                "       <td>"+country+"</td>\n" +
                "       <td>"+fullName+"</td>\n" +
                "       <td>"+age+"</td>\n" +
                "       <td>"+total+"</td>\n" +
                "       <td>"+pts+"</td>\n" +
                "     </tr>"
        }

        document.getElementById(gamesname2[a]).innerHTML = innercontent;
    }
    init();
}

function changeToFianl(){
    for (let a = 0;a<gamesname.length;a++){
        let innercontent = "<tr>\n" +
            "                    <th>Overall Rank</th>\n" +
            "                    <th>Country</th>\n" +
            "                    <th>Athlete</th>\n" +
            "                    <th>Age</th>\n" +
            "                    <th>Points</th>\n" +
            "                    <th>Pts Behind</th>\n" +
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
            const pts = result["PointsBehind"];

            innercontent+="<tr>\n" +
                "       <td>"+rank+"</td>\n" +
                "       <td>"+country+"</td>\n" +
                "       <td>"+fullName+"</td>\n" +
                "       <td>"+age+"</td>\n" +
                "       <td>"+total+"</td>\n" +
                "       <td>"+pts+"</td>\n" +
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
            "                    <th>Pts Behind</th>\n" +
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
            const pts = result["PointsBehind"];

            innercontent+="<tr>\n" +
                "       <td>"+rank+"</td>\n" +
                "       <td>"+country+"</td>\n" +
                "       <td>"+fullName+"</td>\n" +
                "       <td>"+age+"</td>\n" +
                "       <td>"+total+"</td>\n" +
                "       <td>"+pts+"</td>\n" +
                "     </tr>"
        }

        document.getElementById(gamesname2[a]).innerHTML = innercontent;
    }
}

function changeToSemifinal(){
    console.log("diaoyong")
    for (let a = 0;a<gamesname.length;a++){
        let innercontent = "<tr>\n" +
            "                    <th>Overall Rank</th>\n" +
            "                    <th>Country</th>\n" +
            "                    <th>Athlete</th>\n" +
            "                    <th>Age</th>\n" +
            "                    <th>Points</th>\n" +
            "                    <th>Pts Behind</th>\n" +
            "                 </tr>";
        const jsonObject = gamesinfo[a];
        const jsonArray = jsonObject["Heats"];
        if(jsonArray.length<2) {
            document.getElementById(gamesname2[a]).innerHTML = "暂无数据";
        }else{
            const jsonObject1 = jsonArray[1];
            const jsonArray1 = jsonObject1["Results"];

            for (let i = 0; i < jsonArray1.length; i++) {
                const result = jsonArray1[i];
                const total = result["TotalPoints"];
                const fullName = result["FullName"];
                const rank = result["Rank"];
                const age = result["AthleteResultAge"];
                const country = result["NAT"];
                const pts = result["PointsBehind"];

                innercontent+="<tr>\n" +
                    "       <td>"+rank+"</td>\n" +
                    "       <td>"+country+"</td>\n" +
                    "       <td>"+fullName+"</td>\n" +
                    "       <td>"+age+"</td>\n" +
                    "       <td>"+total+"</td>\n" +
                    "       <td>"+pts+"</td>\n" +
                    "     </tr>"
            }

            document.getElementById(gamesname[a]).innerHTML = innercontent;
        }

    }


    for (let a = 0;a<gamesname2.length;a++){
        let innercontent = "<tr>\n" +
            "                    <th>Overall Rank</th>\n" +
            "                    <th>Country</th>\n" +
            "                    <th>Athlete</th>\n" +
            "                    <th>Age</th>\n" +
            "                    <th>Points</th>\n" +
            "                    <th>Pts Behind</th>\n" +
            "                 </tr>";
        const jsonObject = gamesinfo2[a];
        const jsonArray = jsonObject["Heats"];
        if(jsonArray.length<2)
        {
            document.getElementById(gamesname2[a]).innerHTML = "暂无数据";
        }else{
            const jsonObject1 = jsonArray[1];
            const jsonArray1 = jsonObject1["Results"];

            for (let i = 0; i < jsonArray1.length; i++) {
                const result = jsonArray1[i];
                const total = result["TotalPoints"];
                const fullName = result["FullName"];
                const rank = result["Rank"];
                const result1 = result["Competitors"];
                const age = result1[0]["AthleteResultAge"]+"/"+result1[1]["AthleteResultAge"];
                const country = result["NAT"];
                const pts = result["PointsBehind"];

                innercontent+="<tr>\n" +
                    "       <td>"+rank+"</td>\n" +
                    "       <td>"+country+"</td>\n" +
                    "       <td>"+fullName+"</td>\n" +
                    "       <td>"+age+"</td>\n" +
                    "       <td>"+total+"</td>\n" +
                    "       <td>"+pts+"</td>\n" +
                    "     </tr>"
            }

            document.getElementById(gamesname2[a]).innerHTML = innercontent;
        }

    }
}

function changeToPreliminary(){
    for (let a = 0;a<gamesname.length;a++){
        let innercontent = "<tr>\n" +
            "                    <th>Overall Rank</th>\n" +
            "                    <th>Country</th>\n" +
            "                    <th>Athlete</th>\n" +
            "                    <th>Age</th>\n" +
            "                    <th>Points</th>\n" +
            "                    <th>Pts Behind</th>\n" +
            "                 </tr>";
        const jsonObject = gamesinfo[a];
        const jsonArray = jsonObject["Heats"];
        if(jsonArray.length<3) {
            document.getElementById(gamesname2[a]).innerHTML = "暂无数据";
        }else{
            const jsonObject1 = jsonArray[2];
            const jsonArray1 = jsonObject1["Results"];

            for (let i = 0; i < jsonArray1.length; i++) {
                const result = jsonArray1[i];
                const total = result["TotalPoints"];
                const fullName = result["FullName"];
                const rank = result["Rank"];
                const age = result["AthleteResultAge"];
                const country = result["NAT"];
                const pts = result["PointsBehind"];

                innercontent+="<tr>\n" +
                    "       <td>"+rank+"</td>\n" +
                    "       <td>"+country+"</td>\n" +
                    "       <td>"+fullName+"</td>\n" +
                    "       <td>"+age+"</td>\n" +
                    "       <td>"+total+"</td>\n" +
                    "       <td>"+pts+"</td>\n" +
                    "     </tr>"
            }

            document.getElementById(gamesname[a]).innerHTML = innercontent;
        }
    }


    for (let a = 0;a<gamesname2.length;a++){
        let innercontent = "<tr>\n" +
            "                    <th>Overall Rank</th>\n" +
            "                    <th>Country</th>\n" +
            "                    <th>Athlete</th>\n" +
            "                    <th>Age</th>\n" +
            "                    <th>Points</th>\n" +
            "                    <th>Pts Behind</th>\n" +
            "                 </tr>";
        const jsonObject = gamesinfo2[a];
        const jsonArray = jsonObject["Heats"];
        if (jsonArray.length<3){
            document.getElementById(gamesname2[a]).innerHTML = "暂无数据";
        }else{
            const jsonObject1 = jsonArray[2];
            const jsonArray1 = jsonObject1["Results"];

            for (let i = 0; i < jsonArray1.length; i++) {
                const result = jsonArray1[i];
                const total = result["TotalPoints"];
                const fullName = result["FullName"];
                const rank = result["Rank"];
                const result1 = result["Competitors"];
                const age = result1[0]["AthleteResultAge"]+"/"+result1[1]["AthleteResultAge"];
                const country = result["NAT"];
                const pts = result["PointsBehind"];

                innercontent+="<tr>\n" +
                    "       <td>"+rank+"</td>\n" +
                    "       <td>"+country+"</td>\n" +
                    "       <td>"+fullName+"</td>\n" +
                    "       <td>"+age+"</td>\n" +
                    "       <td>"+total+"</td>\n" +
                    "       <td>"+pts+"</td>\n" +
                    "     </tr>"
            }

            document.getElementById(gamesname2[a]).innerHTML = innercontent;
        }

    }
}
function init() {
    const name = [ "women%201m%20springboard",
        "women%203m%20springboard",
        "women%2010m%20platform",
        "women%203m%20synchronised",
        "women%2010m%20synchronised",
        "men%201m%20springboard",
        "men%203m%20springboard",
        "men%2010m%20platform",
        "men%203m%20synchronised",
        "men%2010m%20synchronised"];
    let id = location.search.slice(1);
    if(id != null){
        console.log(id);
        for (let i = 0;i < name.length;i++){
            if(id.includes(name[i])){
                let id1 = name[i].replaceAll("%20"," ")
                let type = id1.concat("1");
                document.getElementById(type.toString()).open="open";
                location.href=`#${type.toString()}`;
                if (id.includes("preliminaries")){
                    console.log("preliminaries")
                    changeToPreliminary();
                }else if (id.includes("semifinals")){
                    changeToSemifinal();
                    console.log("semifinals")
                }else {
                    changeToFianl();
                }
                break;
            }
        }

    }
}




