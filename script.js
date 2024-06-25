const buttons = document.querySelectorAll('.my-button')
let temp = ""
let num
let output = 0
let operator = "+"

function addition(result) {
    num = parseFloat(temp)
    const val = output + num

    const str = val.toString()
    result.textContent = str
}

function subtraction(result) {
    num = parseFloat(temp)
    const val = output - num

    const str = val.toString()
    result.textContent = str
}

function multiplication(result) {
    num = parseFloat(temp)
    const val = output * num

    const str = val.toString()
    result.textContent = str
}

function divide(result) {
    num = parseFloat(temp)
    const val = output / num

    const str = val.toString()
    result.textContent = str
}

function displayContent(buttonText, elements, result, buttonId) {
    if(buttonText === '0') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }

        elements.textContent += buttonText
        temp += buttonText

        if(output === 0) {
            if(result.textContent === '0') {
                result.textContent = ""

                if(operator === '-') {
                    result.textContent += `-${buttonText}`
                }
                else if(operator === '*' || operator === '/') {
                    result.textContent = '0'
                }
                else {
                    result.textContent += buttonText
                }
            } else {
                result.textContent += buttonText
            }
        } else {
            if(operator === '+') {
                addition(result)
            }
            else if(operator === '-') {
                subtraction(result)
            }
            else if(operator === '*') {
                multiplication(result)
            }
            else if(operator === '/') {
                divide(result)
            }
        }
    } 
    else if(buttonText === '1') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }

        elements.textContent += buttonText
        temp += buttonText

        if(output === 0) {
            if(result.textContent === '0') {
                result.textContent = ""

                if(operator === '-') {
                    result.textContent += `-${buttonText}`
                }
                else if(operator === '*' || operator === '/') {
                    result.textContent = '0'
                }
                else {
                    result.textContent += buttonText
                }
            } else {
                result.textContent += buttonText
            }
        } else {
            if(operator === '+') {
                addition(result)
            }
            else if(operator === '-') {
                subtraction(result)
            }
            else if(operator === '*') {
                multiplication(result)
            }
            else if(operator === '/') {
                divide(result)
            }
        }
    }
    else if(buttonText === '2') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        
        elements.textContent += buttonText
        temp += buttonText

        if(output === 0) {
            if(result.textContent === '0') {
                result.textContent = ""

                if(operator === '-') {
                    result.textContent += `-${buttonText}`
                }
                else if(operator === '*' || operator === '/') {
                    result.textContent = '0'
                }
                else {
                    result.textContent += buttonText
                }
            } else {
                result.textContent += buttonText
            }
        } else {
            if(operator === '+') {
                addition(result)
            }
            else if(operator === '-') {
                subtraction(result)
            }
            else if(operator === '*') {
                multiplication(result)
            }
            else if(operator === '/') {
                divide(result)
            }
        }
    }
    else if(buttonText === '3') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        
        elements.textContent += buttonText
        temp += buttonText

        if(output === 0) {
            if(result.textContent === '0') {
                result.textContent = ""

                if(operator === '-') {
                    result.textContent += `-${buttonText}`
                }
                else if(operator === '*' || operator === '/') {
                    result.textContent = '0'
                }
                else {
                    result.textContent += buttonText
                }
            } else {
                result.textContent += buttonText
            }
        } else {
            if(operator === '+') {
                addition(result)
            }
            else if(operator === '-') {
                subtraction(result)
            }
            else if(operator === '*') {
                multiplication(result)
            }
            else if(operator === '/') {
                divide(result)
            }
        }
    }
    else if(buttonText === '4') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        
        elements.textContent += buttonText
        temp += buttonText

        if(output === 0) {
            if(result.textContent === '0') {
                result.textContent = ""

                if(operator === '-') {
                    result.textContent += `-${buttonText}`
                }
                else if(operator === '*' || operator === '/') {
                    result.textContent = '0'
                }
                else {
                    result.textContent += buttonText
                }
            } else {
                result.textContent += buttonText
            }
        } else {
            if(operator === '+') {
                addition(result)
            }
            else if(operator === '-') {
                subtraction(result)
            }
            else if(operator === '*') {
                multiplication(result)
            }
            else if(operator === '/') {
                divide(result)
            }
        }
    }
    else if(buttonText === '5') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        
        elements.textContent += buttonText
        temp += buttonText

        if(output === 0) {
            if(result.textContent === '0') {
                result.textContent = ""

                if(operator === '-') {
                    result.textContent += `-${buttonText}`
                }
                else if(operator === '*' || operator === '/') {
                    result.textContent = '0'
                }
                else {
                    result.textContent += buttonText
                }
            } else {
                result.textContent += buttonText
            }
        } else {
            if(operator === '+') {
                addition(result)
            }
            else if(operator === '-') {
                subtraction(result)
            }
            else if(operator === '*') {
                multiplication(result)
            }
            else if(operator === '/') {
                divide(result)
            }
        }
    }
    else if(buttonText === '6') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        
        elements.textContent += buttonText
        temp += buttonText

        if(output === 0) {
            if(result.textContent === '0') {
                result.textContent = ""

                if(operator === '-') {
                    result.textContent += `-${buttonText}`
                }
                else if(operator === '*' || operator === '/') {
                    result.textContent = '0'
                }
                else {
                    result.textContent += buttonText
                }
            } else {
                result.textContent += buttonText
            }
        } else {
            if(operator === '+') {
                addition(result)
            }
            else if(operator === '-') {
                subtraction(result)
            }
            else if(operator === '*') {
                multiplication(result)
            }
            else if(operator === '/') {
                divide(result)
            }
        }
    }
    else if(buttonText === '7') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        
        elements.textContent += buttonText
        temp += buttonText

        if(output === 0) {
            if(result.textContent === '0') {
                result.textContent = ""

                if(operator === '-') {
                    result.textContent += `-${buttonText}`
                }
                else if(operator === '*' || operator === '/') {
                    result.textContent = '0'
                }
                else {
                    result.textContent += buttonText
                }
            } else {
                result.textContent += buttonText
            }
        } else {
            if(operator === '+') {
                addition(result)
            }
            else if(operator === '-') {
                subtraction(result)
            }
            else if(operator === '*') {
                multiplication(result)
            }
            else if(operator === '/') {
                divide(result)
            }
        }
    }
    else if(buttonText === '8') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        
        elements.textContent += buttonText
        temp += buttonText

        if(output === 0) {
            if(result.textContent === '0') {
                result.textContent = ""

                if(operator === '-') {
                    result.textContent += `-${buttonText}`
                }
                else if(operator === '*' || operator === '/') {
                    result.textContent = '0'
                }
                else {
                    result.textContent += buttonText
                }
            } else {
                result.textContent += buttonText
            }
        } else {
            if(operator === '+') {
                addition(result)
            }
            else if(operator === '-') {
                subtraction(result)
            }
            else if(operator === '*') {
                multiplication(result)
            }
            else if(operator === '/') {
                divide(result)
            }
        }
    }
    else if(buttonText === '9') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        
        elements.textContent += buttonText
        temp += buttonText

        if(output === 0) {
            if(result.textContent === '0') {
                result.textContent = ""

                if(operator === '-') {
                    result.textContent += `-${buttonText}`
                }
                else if(operator === '*' || operator === '/') {
                    result.textContent = '0'
                }
                else {
                    result.textContent += buttonText
                }
            } else {
                result.textContent += buttonText
            }
        } else {
            if(operator === '+') {
                addition(result)
            }
            else if(operator === '-') {
                subtraction(result)
            }
            else if(operator === '*') {
                multiplication(result)
            }
            else if(operator === '/') {
                divide(result)
            }
        }
    }
    else if(buttonText === '+') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
            
        if(temp === "") {
            elements.textContent += `0${buttonText}`
            num = 0
        } else {
            elements.textContent += buttonText
            num = parseFloat(temp)
        }

        if(operator === '+') {
            output += num
        }
        else if(operator === '-') {
            output -= num
        }
        else if(operator === '*') {
            output *= num
        }
        else if(operator === '/') {
            output /= num
        }

        temp = ""
        operator = '+'
    }
    else if(buttonText === '-') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        
        if(temp === "") {
            elements.textContent += `0${buttonText}`
            num = 0
            operator = '-'
        } else {
            elements.textContent += buttonText
            num = parseFloat(temp)
        }

        if(operator === '+') {
            output += num
        }
        else if(operator === '-') {
            output -= num
        }
        else if(operator === '*') {
            output *= num
        }
        else if(operator === '/') {
            output /= num
        }

        temp = ""
        operator = '-'
    }
    else if(buttonId === 'multiply') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        
        if(temp === "") {
            elements.textContent += `0${buttonText}`
            num = 0
            operator = '*'
        } else {
            elements.textContent += buttonText
            num = parseFloat(temp)
        }

        if(operator === '+') {
            output += num
        }
        else if(operator === '-') {
            output -= num
        }
        else if(operator === '*') {
            output *= num
            result.textContent = output.toString()
        }
        else if(operator === '/') {
            output /= num
            result.textContent = output.toString()
        }

        temp = ""
        operator = '*'
    }
    else if(buttonId === 'division') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        
        if(temp === "") {
            elements.textContent += `0${buttonText}`
            num = 0
            operator = '/'
        } else {
            elements.textContent += buttonText
            num = parseFloat(temp)
        }

        if(operator === '+') {
            output += num
        }
        else if(operator === '-') {
            output -= num
        }
        else if(operator === '*') {
            output *= num
            result.textContent = output.toString()
        }
        else if(operator === '/') {
            if(output === 0 && num === 0) {
                output = 0
            }
            else {
                output /= num
                result.textContent = output.toString()
            }
        }

        temp = ""
        operator = '/'
    }
    else if(buttonText === '.') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        
        if(temp.includes('.') != true) {
            elements.textContent += buttonText 
            temp += buttonText

            if(output === 0) {
                if(result.textContent === '0') {
                    result.textContent = ""
    
                    if(operator === '-') {
                        result.textContent += `-0${buttonText}`
                    }
                    else if(operator === '*' || operator === '/') {
                        result.textContent = '0'
                    }
                    else {
                        result.textContent += `0${buttonText}` 
                    }
                } else {
                    result.textContent += buttonText
                }
            } else {
                if(operator === '+') {
                    addition(result)
                }
                else if(operator === '-') {
                    subtraction(result)
                }
                else if(operator === '*') {
                    multiplication(result)
                }
                else if(operator === '/') {
                    divide(result)
                }
            }
        }
    }
    else if(buttonText === '=') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }
        else {
            elements.style.display = 'none'
            result.style.fontSize = '2em'
        }
    }
    else if(buttonText === 'Clear') {
        if(elements.style.display === 'none') {
            elements.style.display = 'block'
            result.style.fontSize = ''
        }

        num = 0
        output = 0
        temp = ""
        operator = '+'

        elements.textContent = ''
        result.textContent = '0'
    }
}

function clickButton(event) {
    const buttonText = event.target.textContent
    const buttonId = event.target.id

    const elements = document.getElementById('elements')
    const result = document.getElementById('result')

    displayContent(buttonText, elements, result, buttonId)
}

buttons.forEach((button) => {
    button.addEventListener('click', clickButton)
})