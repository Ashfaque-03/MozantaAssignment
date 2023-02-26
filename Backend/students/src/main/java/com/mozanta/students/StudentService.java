package com.mozanta.students;

import org.springframework.stereotype.Service;
// import java.util.*;
// import java.lang.*;
// for date validation
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Service
public class StudentService {

    public boolean checkStudent(Student student) {
        // int flag=0;
        String name = student.getName();
        String dob = student.getDateOfBirth();
        String cls = student.getCls();
        String division = student.getDivision();
        String gender = student.getGender();
        // checking the name is valid or not
        if (checkName(name)) {
            // checking the date of birth is valid or not
            if (checkDate(dob)) {
                // checking the class is valid or not
                if (checkClass(cls)) {
                    // checking the division is valid or not
                    if (checkDivision(division)) {
                        // checking the gender is Male or Female
                        if (gender.matches("Male") || gender.matches("Female")) {
                            return true;
                        } else {
                            System.out.println("gender is not valid");
                            return false;
                        }
                    } else {
                        System.out.println("division is not valid");
                        return false;
                    }
                } else {
                    System.out.println("class is not valid");
                    return false;
                }
            } else {
                System.out.println("dob is not valid");
                return false;
            }
        } else {
            System.out.println("name is not valid");
            return false;
        }
    }

    // checking the date is valid or not
    private static boolean checkDate(String date) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-mm-dd");
        // With lenient parsing, the parser may use heuristics to interpret
        // inputs that do not precisely match this object's format.
        format.setLenient(false);
        try {
            format.parse(date);
        } catch (ParseException e) {
            return false;
        }
        return true;
    }

    // checking the name is valid or not
    private static boolean checkName(String name) {
        if (name.length() < 2 || name.length() > 100) { // checks if the name is null , the min length =2 and max
                                                        // length= 100
            return false;
        }
        int len = name.length();
        if (name.charAt(0) == ' ') {
            return false;
        }
        for (int i = 0; i < len; i++) {
            // checks whether the character is not a letter
            // if it is not a letter ,it will return false
            char ch = Character.toLowerCase(name.charAt(i));
            if (Character.isLetter(ch) || ch == ' ') {
                continue;
            }
            return false;
        }
        return true;
    }

    // checking class of student
    private static boolean checkClass(String cls){
        if (cls.matches("I") || cls.matches("II") || cls.matches("III") || cls.matches("IV") || cls.matches("V") || cls.matches("VI") || 
            cls.matches("VII") || cls.matches("VIII") || cls.matches("IX") || cls.matches("X") || cls.matches("X11") || cls.matches("X12")){
                return true;
        }
        return false;
    }

    // checking division of student
    private static boolean checkDivision(String division){
        if( division.matches("A") || division.matches("B") || division.matches("C") ){
            return true;
        }
        return false;
    }

    // capitalize name
    public Student capitalizeString(Student student) {
        // stores each characters to a char array
        String name = student.getName();
        char[] charArray = name.toCharArray();
        boolean foundSpace = true;

        for (int i = 0; i < charArray.length; i++) {

            // if the array element is a letter
            if (Character.isLetter(charArray[i])) {

                // check space is present before the letter
                if (foundSpace) {

                    // change the letter into uppercase
                    charArray[i] = Character.toUpperCase(charArray[i]);
                    foundSpace = false;
                }
            }

            else {
                // if the new character is not character
                foundSpace = true;
            }
        }

        // convert the char array to the string
        name = String.valueOf(charArray);
        student.setName(name);
        return student;
    }

}