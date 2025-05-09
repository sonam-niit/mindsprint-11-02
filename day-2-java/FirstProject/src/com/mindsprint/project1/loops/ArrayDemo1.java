package com.mindsprint.project1.loops;

import java.util.Scanner;

public class ArrayDemo1 {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int[] array1= new int[5];
        String[] names= {"test1","test2","test3"};

        System.out.println("Access Direct: "+names[0]);//Accessing direct element
        System.out.println("Accessing using for loop");
        for(int i=0;i<names.length;i++)
            System.out.println(names[i]);
        System.out.println("Using For each Loop");
        for(String name:names)
            System.out.println(name);
        System.out.println("Store values in array using loop");
        for(int i=0;i<array1.length;i++){
            System.out.println("Enter any number");
            array1[i]=sc.nextInt();
        }
        for(int num:array1)
            System.out.print(num+" ");
    }
}
