function identity(nickname, first name, age, city)
    local result = nickname.." ". .first name.." ". .age.." ".. city
    return result
end
print(identity("your nickname", "your first name","your age", "your city"))
-- function is the function that creates a function in the code
-- identity is the function name
-- local is a function that is always put before a variable for a variable not global
-- result is the variable where the information given will be stored via the identity function
-- return serves to know what the function will return, here we will return the variable with the information "result"
-- end is used to close the function
-- print is used to run anything in your terminal when the progam is launching
-- identity(...) is used to give the information in order to store it in the variable "result"
