const { SingUpEmail1 } = require("./apis/apiAuth");
const { createUser2, getUser2, getCourses, vinculateCourse, getAllUserCourses, finishLesson, relationCourseWithUser, getModule, getOneCourse } = require("./apis/apiStrapi");
/*
createUser2("nicolas", "test23@gmail.com").then(data => {
    console.log(data.data.attributes)
}).catch(error => {
    console.log(error)
})*/
/*
SingUpEmail1("test231@gmail.com", "test12").then(user => {
    console.log(user.uid)
}).catch(error => {
    console.log(error)
})*/
/*
getUser2("28ETKZYezs9pr4i7").then(data => {
    console.log(data)
}).catch(error => console.log(error))*/
/*
getCourses().then(data => {
    console.log(data)
}).catch(error => console.log(error))*/
/*
vinculateCourse("28ETKZYezs9pr4i7", "1").then(data => {
    console.log(data.data)
}).catch(error => console.log(error))*/
/*
getAllUserCourses().then(data => {
    //console.log(data.data)
    const allCourses = data.data.filter(data => data.attributes.user_ID === "28ETKZYezs9pr4i7")
    //console.log(allCourses)
    getCourses().then(data => {
        let newCourses = []
        const courses = data.data;
        console.log(courses)
        allCourses.map(item => {
            const course = courses.find(course => course.attributes.courseID === item.attributes.course_ID)
            item.attributes.course_name = course.attributes.technology;
            item.attributes.level = course.attributes.level;
            newCourses.push(item);
        })
        console.log(newCourses);
    }).catch(error => console.log(error))
}).catch(error => console.log(error))*/
/*
const user_ID = "28ETKZYezs9pr4i7";
const course_ID = "1";
const lesson_number = "5";
    getAllUserCourses().then(data => {
        console.log(data.data)
        const allCourses = data.data.filter(data => data.attributes.user_ID === user_ID && data.attributes.course_ID === course_ID);
        console.log(allCourses)
        //const user_course = allCourses.find(item => item.attributes.courseID === course_ID);
        finishLesson(allCourses[0].id, lesson_number).then(data => {
            console.log(data)
        }).catch(error => console.log(error))
    }).catch(error => console.log(error))*/
/*const course_ID = "1";
getCourses().then(data => {
    console.log(data.data[0])
    const course = data.data.filter(item => item.attributes.courseID === course_ID)
    console.log(course[0].attributes.lms_lessons.data)
})*/
/*
createUser2("nico2", "test@gmail.com", "uidtestasd2254", "riquelme", "2024-01-14", "1234", "buenos aires", "argentina", "buenos aires", "1169018596").then(user => {
    console.log(user)
}).catch(error => console.log(error))*/
/*
getUser2("28ETKZYezs9pr4i7").then(user => {
    console.log(user)
}).catch(error => console.log(error))*/

/*
relationCourseWithUser(4,2).then(data => {
    console.log(data)
}).catch(error => console.log(error))*/
/*
getCourses().then(courses => {
    const course = courses.data.filter(item => item.id == 6);
    console.log(course[0].attributes.lms_modules)
    vinculateCourse("TcAvjO1vpccuj1pT7ALwmGQdk342", 6, course[0]).then(data => {
        const response = {
            ...data.data
        }
        console.log(response)
    }).catch(error => console.log(error))
}).catch(error => console.log(error))*/
/*
getAllUserCourses().then(data => {
    console.log(data)
    const allCourses = data.data.filter(data => data.attributes.user_ID === "TcAvjO1vpccuj1pT7ALwmGQdk342")
    console.log(allCourses[2].attributes.lms_course.data)
})*/

getCourses().then(courses => {
    console.log(courses.data[3].attributes.lms_modules)
})
/*
getModule(1).then(module => {
    console.log(module.data.attributes.lms_lessons)
}).catch(error => console.log(error))
*/

getCourses().then(courses => {
    const course = courses.data.filter(item => item.id === 6);
    let n_lessons = 0;
    getOneCourse(course[0].id).then(course => {
        console.log(course)
        course.data.attributes.lms_modules.data.map(item => {
            console.log(item)
            item.attributes.lms_lessons.data.map(item => {
                n_lessons ++;
            })
        })
        console.log(n_lessons)
    }).catch(error => console.log(error))

}).catch(error => console.log(error))