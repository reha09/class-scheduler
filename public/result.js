const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

const courses={
    "1" : {
        "id": "CSCI103",
        "name": "Intro to Computer Science",
        "sessions": {
            "0": {
                "day": [["1", "12:30", "13:50"], ["3", "12:30", "13:50"]]
                }
            },
            "1": {
                "day": [["1", "14:00", "15:20"], ["3", "14:00", "15:20"]]
            }
        },
    "2" : {
        "id": "CSCI104",
        "name": "Data Structures and Object Oriented Design",
        "sessions": {
            "0": {
                "day": [["2", "11:00", "12:20"], ["4", "11:00", "12:20"]]
            },
            "1": {
                "day": [["2", "08:00", "09:20"], ["4", "08:00", "09:20"]]
            }
        }
    },
    "3" : {
        "id": "CSCI170",
        "name": "Discreate Methods in Computer Science",
        "sessions": {
            "0": {
                "day": [["2", "09:30", "10:50"], ["4", "09:30", "10:50"]]
            },
            "1": {
                "day": [["2", "12:30", "13:50"], ["4", "12:30", "13:50"]]
            }
        }
    },
    "4" : {
        "id": "MATH125",
        "name": "Calculus I",
        "sessions": {
            "0": {
                "day": [["1", "09:00", "09:50"], ["3", "09:00", "09:50"], ["5", "09:00", "09:50"]]
            },
            "1": {
                "day": [["1", "10:00", "10:50"], ["3", "10:00", "10:50"], ["5", "10:00", "10:50"]]
            },
            "2": {
                "day": [["1", "11:00", "11:50"], ["3", "11:00", "11:50"], ["5", "11:00", "11:50"]]
            },
            "3": {
                "day": [["1", "12:00", "12:50"], ["3", "12:00", "12:50"], ["5", "12:00", "12:50"]]
            },
            "4": {
                "day": [["1", "13:00", "13:50"], ["3", "13:00", "13:50"], ["5", "13:00", "13:50"]]
            }
        }
    },
    "5" : {
        "id": "MATH126",
        "name": "Calculus II",
        "sessions": {
            "0": {
                "day": [["1", "09:00", "09:50"], ["3", "09:00", "09:50"], ["5", "09:00", "09:50"]]
            },
            "1": {
                "day": [["1", "10:00", "10:50"], ["3", "10:00", "10:50"], ["5", "10:00", "10:50"]]
            },
            "2": {
                "day": [["1", "11:00", "11:50"], ["3", "11:00", "11:50"], ["5", "11:00", "11:50"]]
            },
            "3": {
                "day": [["1", "12:00", "12:50"], ["3", "12:00", "12:50"], ["5", "12:00", "12:50"]]
            },
            "4": {
                "day": [["1", "13:00", "13:50"], ["3", "13:00", "13:50"], ["5", "13:00", "13:50"]]
            }
        }
    },
    "6" : {
        "id": "MATH129",
        "name": "Calculus II for Engineers and Scientists",
        "sessions": {
            "0": {
                "day": [["1", "10:00", "10:50"], ["3", "10:00", "10:50"], ["5", "10:00", "10:50"]]
            },
            "1": {
                "day": [["1", "13:00", "13:50"], ["3", "13:00", "13:50"], ["5", "13:00", "13:50"]]
            }
        }
    },
    "7" : {
        "id": "MATH118",
        "name": "Fundamental Principles of Calculus",
        "sessions": {
            "0": {
                "day": [["1", "09:00", "09:50"], ["3", "09:00", "09:50"], ["5", "09:00", "09:50"]]
            },
            "1": {
                "day": [["1", "12:00", "12:50"], ["3", "12:00", "12:50"], ["5", "12:00", "12:50"]]
            },
            "2": {
                "day": [["1", "13:00", "13:50"], ["3", "13:00", "13:50"], ["5", "13:00", "13:50"]]
            },
            "3": {
                "day": [["1", "14:00", "14:50"], ["3", "14:00", "14:50"], ["5", "14:00", "14:50"]]
            }
        }
    },
    "8" : {
        "id": "MATH117",
        "name": "Introduction to Mathematics for Business and Economics",
        "sessions": {
            "0": {
                "day": [["1", "12:00", "12:50"], ["3", "12:00", "12:50"], ["5", "12:00", "12:50"]]
            }
        }
    },
    "9" : {
        "id": "MATH114",
        "name": "Foundations of Statistics",
        "sessions": {
            "0": {
                "day": [["1", "11:00", "11:50"], ["3", "11:00", "11:50"], ["5", "11:00", "11:50"]]
            },
            "1": {
                "day": [["1", "13:00", "13:50"], ["3", "13:00", "13:50"], ["5", "13:00", "13:50"]]
            }
        }
    },
    "10" : {
        "id": "MATH108",
        "name": "Contemporary Precalculus",
        "sessions": {
            "0": {
                "day": [["1", "09:00", "09:50"], ["3", "09:00", "09:50"], ["5", "09:00", "09:50"]]
            }
        }
    },
    "11" : {
        "id": "CSCI102",
        "name": "Fundamentals of Computer Science",
        "sessions": {
            "0": {
                "day": [["1", "15:00", "16:00"], ["3", "15:00", "16:00"]]
                }
            },
            "1": {
                "day": [["1", "16:00", "17:00"], ["3", "16:00", "17:00"]]
            }
        }

}

console.log(courses["1"])
