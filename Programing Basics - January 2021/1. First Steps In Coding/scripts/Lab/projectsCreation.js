function projectCreation(input) {

    let name = (input[0]);
    let projectsQuantity = Number(input[1]);
    let hourPerProject = Number(3);
    let hoursNeeded = Number(projectsQuantity * hourPerProject);

    console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${projectsQuantity} project/s.`);

}
projectCreation(["George", "4"]);

// Checked in Judge; score = 100/100