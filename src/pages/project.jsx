import { useState } from "react";

function CreateProject() {
let projects = JSON.parse(localStorage.getItem("projects")) || [];
const [baseBudget, setBudget] = useState(0);

    return (
        <>
            <div>
                <h1>Créer un nouveau projet</h1>

                <input type="text" id="projectName" placeholder="Nom du projet" /><br></br>
                <input type="text" id="projectDescription" placeholder="Descrition" /><br></br>
                <input type="text" id="projectImage" placeholder="URL de l'image"/><br></br>
                <select id="projectCategory">
                    <option value="sauvetage">Sauvetage d'animaux</option>
                    <option value="refuge">Refuges</option>
                    <option value="soins">Soins vétérinaires</option>
                    <option value="protection">Protection animale</option>
                    <option value="autre">Autre</option>
                </select><br></br>
                <input type="number" id="projectBugdet" placeholder="Budget" /><br></br>
                <button onClick={
                    () => {
                        const name = document.getElementById("projectName").value;
                        const description = document.getElementById("projectDescription").value;
                        const image = document.getElementById("projectImage").value;
                        const category = document.getElementById("projectCategory").value;
                        const budget = document.getElementById("projectBugdet").value;
                        const newProject = { name, description, image, category, baseBudget, budget };
                        projects.push(newProject);
                        localStorage.setItem("projects", JSON.stringify(projects));
                        alert("Projet créé avec succès !");
                }}>Créer le projet</button>
            </div>
        </>
    )
}

export default CreateProject