window.onload = function (){
    let innercontent = "<tr>\n" +
        "            <th>Overall Rank</th>\n" +
        "            <th>Country</th>\n" +
        "            <th class=\"gold\">Gold</th>\n" +
        "            <th class=\"silver\">Silver</th>\n" +
        "            <th class=\"bronze\">Bronze</th>\n" +
        "            <th>Total</th>\n" +
        "        </tr>";
    const medals = medalData["Medals"];
    const sportmedals = medals["SportMedals"];
    const countries = sportmedals[0]["Countries"];
    for (let i = 0;i<countries.length;i++){
        const result = countries[i];
        const rank = result["Rank"];
        const country = result["CountryName"]
        const gold = result["Gold"]["Count"];
        const silver = result["Silver"]["Count"];
        const bronze = result["Bronze"]["Count"];
        const total = result["TotalCount"];
        innercontent +="<tr>\n" +
            "       <td>"+rank+"</td>\n" +
            "       <td>"+country+"</td>\n" +
            "       <td class=\"gold\">"+gold+"</td>\n" +
            "       <td class=\"silver\">"+silver+"</td>\n" +
            "       <td class=\"bronze\">"+bronze+"</td>\n" +
            "       <td>"+total+"</td>\n" +
            "     </tr>"
    }
    document.getElementById("medaltable").innerHTML = innercontent;

}