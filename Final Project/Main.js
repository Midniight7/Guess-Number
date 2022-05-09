import java.util.Random;
import java.util.Scanner;

public class GuessNumber{

 public static void main(String[] args){

 Random rand = new Random();
 Scanner scanner = new Scanner(System.in);

  int randomNumber = rand.nextInt(100) + 1 ;

  System.out.println(" Enter your guess between 1 and 100:");
    
  int playerGuess = scanner.nextInt();
 
  
  if (playerGuess == randomNumber){
  System.out.println( " Congratulations, you got it right!");
  }
  else if(randomNumber < playerGuess){
  System.out.println("sorry, you guessed big!");
  }
  else if(randomNumber > playerGuess)
  System.out.println("sorry, your guess is too small!");
  }
 }
