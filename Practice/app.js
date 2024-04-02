const instructor = [
    {name:"Tim Ferris", email: "tim.fer@college.com", username:"tferris"},
    {name: "Jacqueline Smith", email:"jacqueline@yahoo.com", username:"jsmith"}
]

const course = [
    {title: "Intro to Accounting", courseCode: "ACC100", taughtBy:"tferris"},
    {title:"Programming in C", courseCode: "PROG301", taughtBy: null},
    {title: "Statistics", courseCode: "STAT405", taughtBy: "jsmith"}
]

const displayAll = () => 
{
    for(let currentCourse of course)
    {
        console.log(`course: ${currentCourse.courseCode} ${currentCourse.title}`);
        if(currentCourse.taughtBy === null)
        {
            console.log("No instructor is assigned till now");
        }
        else
        {
            console.log(`Instructor: ${currentCourse.taughtBy}`);
        }
        console.log("____________________________________________");
    }
}

displayAll();

const finder = (name) =>
{
    if(name === '')
    {
        console.log("No name of instructor provided");
    }
    else
    {
        let currentItem;
        let currInstructor = name.toLowerCase();
        let pos = -1;
        for(currentItem of instructor)
        {
            if(name === currentItem.name)
            {
                console.log(`Details: ${currentItem.name}, ${currentItem.email}, ${currentItem.username}`);
                pos = 1;
            }
        }

        if(pos === -1)
        {
            console.log("No instructor found");
        }
    }
}

finder("Tim Ferris");