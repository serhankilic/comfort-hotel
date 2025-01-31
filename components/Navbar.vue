<template>
    <div class="navbar-container">
        <div class="navbar-content">
            <div class="navbar-left-side">
                <a href="#" class="logo">White Wonder Suites</a>
                <div class="navlinks">
                    <a href="#" class="navlink">Home</a>
                    <a href="#" class="navlink">Rooms</a>
                    <a href="#" class="navlink">Gallery</a>
                    <a href="#" class="navlink">Events</a>
                    <a href="#" class="navlink">Contact</a>
                </div>
            </div>
            <div class="navbar-right-side">
                <a href="#" class="book-button">Book Now</a>
            </div>
        </div>
    </div>
</template>
<style>
.navbar-container {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 10px;
    position: absolute;
    z-index: 4;
    padding-top: 15px;
    backdrop-filter: blur(3px);
    .navbar-content {
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        a {
            text-decoration: none;
            color: white;
        }
        .navbar-left-side {
            display: flex;
            flex-direction: row;
            align-items: center;
            .logo {
                font-size: 32px;
                font-family: 'Bona+Nova', serif;
            }
            .navlinks {
                display: flex;
                margin-left: 50px;
                padding-top: 15px;
                .navlink {
                    font-size: 18px;
                    margin: 0 15px;
                    border-bottom: 1px solid transparent;
                    padding-bottom: 5px;
                    transition: all 0.3s;
                }
                .navlink:hover {
                    border-bottom: 1px solid whitesmoke;
                    text-shadow:
                        0 4px 3px rgba(0, 0, 0, 0.1),
                        0 8px 13px rgba(0, 0, 0, 0.1),
                        0 18px 23px rgba(0, 0, 0, 0.1);
                }
            }
        }
        .navbar-right-side {
            padding-top: 15px;

            .book-button {
                font-size: 18px;
                padding: 10px 15px;
                border: 1px solid rgb(210, 23, 23);
                background-color: rgb(210, 23, 23);
                border-radius: 5px;
                transition: 0.3s;
            }
        }
    }
}

@media only screen and (max-width: 1280px) {
    .navbar-container {
        .navbar-content {
            max-width: 1000px;
        }
    }
}
@media only screen and (max-width: 1024px) {
    .navbar-container {
        width: 100%;
        margin: 0 auto;
        position: absolute;
        z-index: 4;
        padding-top: 15px;
        .navbar-content {
            margin: 0 auto;
            width: 100%;
            max-width: 900px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            a {
                text-decoration: none;
                color: white;
            }
            .navbar-left-side {
                display: flex;
                flex-direction: row;
                align-items: center;
                .logo {
                    font-size: 30px;
                    font-family: 'Bona+Nova', serif;
                }
                .navlinks {
                    display: flex;
                    margin-left: 50px;
                    padding-top: 15px;
                    .navlink {
                        font-size: 16px;
                        margin: 0 15px;
                        border-bottom: 1px solid transparent;
                        padding-bottom: 5px;
                        transition: all 0.3s;
                    }
                    .navlink:hover {
                        border-bottom: 1px solid whitesmoke;
                        text-shadow:
                            0 4px 3px rgba(0, 0, 0, 0.1),
                            0 8px 13px rgba(0, 0, 0, 0.1),
                            0 18px 23px rgba(0, 0, 0, 0.1);
                    }
                }
            }
            .navbar-right-side {
                .book-button {
                    font-size: 16px;
                    padding: 10px 15px;
                    border: 1px solid rgb(210, 23, 23);
                    background-color: rgb(210, 23, 23);
                    border-radius: 5px;
                    transition: 0.3s;
                }
            }
        }
    }
}
@media only screen and (max-width: 838px) {
    .navbar-container {
        width: 100%;
        margin: 0 auto;
        position: absolute;
        z-index: 4;
        padding-top: 15px;
        .navbar-content {
            margin: 0 auto;
            width: 100%;
            max-width: 750px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            a {
                text-decoration: none;
                color: white;
            }
            .navbar-left-side {
                display: flex;
                flex-direction: row;
                align-items: center;
                .logo {
                    font-size: 30px;
                    font-family: 'Bona+Nova', serif;
                }
                .navlinks {
                    display: flex;
                    margin-left: 10px;
                    padding-top: 15px;
                    .navlink {
                        font-size: 16px;
                        margin: 0 10px;
                        border-bottom: 1px solid transparent;
                        padding-bottom: 5px;
                        transition: all 0.3s;
                    }
                    .navlink:hover {
                        border-bottom: 1px solid whitesmoke;
                        text-shadow:
                            0 4px 3px rgba(0, 0, 0, 0.1),
                            0 8px 13px rgba(0, 0, 0, 0.1),
                            0 18px 23px rgba(0, 0, 0, 0.1);
                    }
                }
            }
            .navbar-right-side {
                .book-button {
                    font-size: 16px;
                    padding: 10px 15px;
                    border: 1px solid rgb(210, 23, 23);
                    background-color: rgb(210, 23, 23);
                    border-radius: 5px;
                    transition: 0.3s;
                }
            }
        }
    }
}
@media only screen and (max-width: 768px) {
    .navbar-container {
        width: 100%;
        margin: 0 auto;
        position: absolute;
        z-index: 4;
        padding-top: 15px;
        .navbar-content {
            margin: 0 auto;
            width: 100%;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px 0;
            a {
                text-decoration: none;
                color: white;
            }
            .navbar-left-side {
                display: flex;
                flex-direction: column;
                align-items: center;
                .logo {
                    font-size: 30px;
                    font-family: 'Bona+Nova', serif;
                }
                .navlinks {
                    display: flex;
                    margin-left: 50px;
                    padding: 20px 0;
                    .navlink {
                        font-size: 18px;
                        margin: 0 15px;
                        border-bottom: 1px solid transparent;
                        padding-bottom: 5px;
                        transition: all 0.3s;
                    }
                    .navlink:hover {
                        border-bottom: 1px solid whitesmoke;
                        text-shadow:
                            0 4px 3px rgba(0, 0, 0, 0.1),
                            0 8px 13px rgba(0, 0, 0, 0.1),
                            0 18px 23px rgba(0, 0, 0, 0.1);
                    }
                }
            }
            .navbar-right-side {
                .book-button {
                    font-size: 16px;
                    padding: 10px 15px;
                    border: 1px solid rgb(210, 23, 23);
                    background-color: rgb(210, 23, 23);
                    border-radius: 5px;
                    transition: 0.3s;
                }
            }
        }
    }
}

@media only screen and (max-width: 490px) {
    .navbar-container {
        width: 100%;
        margin: 0 auto;
        position: absolute;
        z-index: 4;
        padding-top: 15px;
        .navbar-content {
            margin: 0 auto;
            width: 100%;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 5px 0;
            a {
                text-decoration: none;
                color: white;
            }
            .navbar-left-side {
                display: flex;
                flex-direction: column;
                align-items: center;
                .logo {
                    font-size: 30px;
                    font-family: 'Bona+Nova', serif;
                }
                .navlinks {
                    display: flex;
                    margin-left: 50px;
                    padding: 20px 0;
                    .navlink {
                        font-size: 18px;
                        margin: 0 10px;
                        border-bottom: 1px solid transparent;
                        padding-bottom: 5px;
                        transition: all 0.3s;
                    }
                    .navlink:hover {
                        border-bottom: 1px solid whitesmoke;
                        text-shadow:
                            0 4px 3px rgba(0, 0, 0, 0.1),
                            0 8px 13px rgba(0, 0, 0, 0.1),
                            0 18px 23px rgba(0, 0, 0, 0.1);
                    }
                }
            }
            .navbar-right-side {
                .book-button {
                    font-size: 16px;
                    padding: 10px 15px;
                    border: 1px solid rgb(210, 23, 23);
                    background-color: rgb(210, 23, 23);
                    border-radius: 5px;
                    transition: 0.3s;
                }
            }
        }
    }
}
</style>
<script>
import { MotionDirective as motion } from '@vueuse/motion'

export default {
    directives: {
        motion: motion(),
    },
}
</script>
