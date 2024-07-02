import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

class MonksAndMonsters {
    private final Scanner input = new Scanner(System.in);
    private boolean sideOfRiver = true;
    boolean quit = false;
    private boolean sideOfRiverDied = true;
    private boolean isDead = false;
    private boolean hasFinished = false;
    private int numOfMonksOnLeftSide = 0;
    private int numOfMonstersOnLeftSide = 0;
    private int numOfMonksOnRightSide = 0;
    private int numOfMonstersOnRightSide = 0;
    private int numOfMonstersAndMonksInBoat = 0;
    private int numOfTrails = 5;
    private final ArrayList<String> monks = new ArrayList<>(Arrays.asList("Monk", "Monk", "Monk"));
    private final ArrayList<String> monsters = new ArrayList<>(Arrays.asList("Monster", "Monster", "Monster"));
    private static ArrayList<String> monksOnRiverLeftSide = new ArrayList<>(3);
    private static ArrayList<String> monstersOnRiverLeftSide = new ArrayList<>(3);
    private static ArrayList<String> monksOnRiverRightSide = new ArrayList<>(3);
    private static ArrayList<String> monstersOnRiverRightSide = new ArrayList<>(3);
    private static ArrayList<String> monksOnBoat = new ArrayList<>(1);
    private static ArrayList<String> monstersOnBoat = new ArrayList<>(1);
    private static ArrayList<String> boat = new ArrayList<>(2);

    private boolean confirmAllIsEqualOnTheBoat(){
        return (numOfMonstersAndMonksInBoat >= 0 && numOfMonstersAndMonksInBoat < 2);
    }
    private void addAllNewEntriesToLeftSide(){
        for (int i = 0; i < 3; i++) {
            monksOnRiverLeftSide.add(monks.get(i));
            monstersOnRiverLeftSide.add(monsters.get(i));
        }
        numOfMonksOnLeftSide = monksOnRiverLeftSide.size();
        numOfMonstersOnLeftSide = monstersOnRiverLeftSide.size();
        boat.add("");
        boat.add("");

    }
    private void addMonkToBoat() throws InterruptedException {
        if (sideOfRiver) add( monksOnRiverLeftSide, monksOnBoat, "Sorry there are no monks left on the left side of the river!", "Cannot add monk to the boat!", true);
        else add( monksOnRiverRightSide, monksOnBoat, "Sorry there are no monks left on the right side of the river!", "Cannot add monk to the boat!", true);
    }
    private void removeMonkFromBoat() throws InterruptedException {
        if (sideOfRiver) remove( monksOnRiverLeftSide, monksOnBoat, "Sorry Cannot remove monk from boat! No monks on Boat!!", true);
        else remove( monksOnRiverRightSide, monksOnBoat, "Sorry Cannot remove monk from boat! No monks on Boat!!", true);
    }
    private void addMonsterToBoat() throws InterruptedException {
        if (sideOfRiver)
            add( monstersOnRiverLeftSide, monstersOnBoat, "Sorry there are no monsters left on the left side of the river!", "Cannot add monster to the boat!", false);
        else add( monstersOnRiverRightSide, monstersOnBoat, "Sorry there are no monsters left on the Right side of the river!", "Cannot add monster to the boat!", false);
    }
    private void removeMonsterFromBoat() throws InterruptedException {
        if (sideOfRiver) remove( monstersOnRiverLeftSide, monstersOnBoat, "Sorry Cannot remove monster from boat! No monsters on Boat!!", false);
        else remove( monstersOnRiverRightSide, monstersOnBoat, "Sorry Cannot remove monster from boat! No monsters on Boat!!", false);
    }

    private void add(ArrayList<String> monstersOrMonksOnRiverSide, ArrayList<String> monstersOrMonksOnBoat, String msg1,
                     String msg2, boolean monsOrMonk) throws InterruptedException {
        if (!(monstersOrMonksOnRiverSide.size() == 0)) {
            if (confirmAllIsEqualOnTheBoat()) {
                String popped = monstersOrMonksOnRiverSide.remove(0);
                monstersOrMonksOnBoat.add(popped);
                numOfMonstersAndMonksInBoat++;
                if (boat.get(0).equalsIgnoreCase("Monster")){
                    boat.set(0, popped);
                    boat.set(1, "Monster");
                }else {
                    if (boat.get(1).equalsIgnoreCase("Monk")){
                        boat.set(1, popped);
                        boat.set(0, "Monk");
                    }else {
                        if (monsOrMonk) {
                            if (!boat.get(0).equalsIgnoreCase("")) {
                                boat.set(1, popped);
                            } else boat.set(0, popped);
                        } else {
                            if (!boat.get(1).equalsIgnoreCase("")) {
                                boat.set(0, popped);
                            } else boat.set(1, popped);
                        }
                    }
                }
            } else {
                clearScreen();
                System.out.println("Sorry the boat has reached maximum capacity\n" + msg2);
                Thread.sleep(1500);
            }
        }else {
            clearScreen();
            System.out.println(msg1);
            Thread.sleep(1500);
        }
    }
    private void remove(ArrayList<String> monstersOrMonksOnRiverSide, ArrayList<String> monstersOrMonksOnBoat, String
            msg, boolean monsOrMonk) throws InterruptedException {
        if (!(monstersOrMonksOnBoat.size() == 0)) {
            monstersOrMonksOnRiverSide.add(monstersOrMonksOnBoat.remove(0));
            numOfMonstersAndMonksInBoat--;
            if (monksOnRiverRightSide.size() == 3 & monstersOnRiverRightSide.size() == 3){
                hasFinished = true;
            }
            if (monsOrMonk) {
                if (boat.get(0).equalsIgnoreCase("")){
                    boat.set(1, "");
                }else boat.set(0, "");
            } else {
                if (boat.get(1).equalsIgnoreCase("")){
                    boat.set(0, "");
                }else boat.set(1, "");
            }
        }else {
            clearScreen();
            System.out.println(msg);
            Thread.sleep(1500);
        }
    }

    private void moveBoat() throws InterruptedException {
        if (!(numOfMonstersAndMonksInBoat == 0)) {
            if (sideOfRiver) {
                if ((numOfMonstersOnLeftSide > numOfMonksOnLeftSide) && numOfMonksOnLeftSide != 0) {
                    isDead = true;
                    sideOfRiverDied = true;
                } else {
                    numOfMonksOnLeftSide -= monksOnBoat.size();
                    numOfMonstersOnLeftSide -= monstersOnBoat.size();
                    numOfMonksOnRightSide = monksOnRiverRightSide.size() + monksOnBoat.size();
                    numOfMonstersOnRightSide = monstersOnRiverRightSide.size() + monstersOnBoat.size();
                    if ((numOfMonstersOnLeftSide > numOfMonksOnLeftSide) && numOfMonksOnLeftSide != 0) {
                        isDead = true;
                        sideOfRiverDied = true;

                    } else if ((numOfMonstersOnRightSide > numOfMonksOnRightSide) && numOfMonksOnRightSide != 0) {
                        isDead = true;
                        sideOfRiverDied = false;
                    } else {
                        sideOfRiver = false;
                    }
                }
            } else {
                if ((numOfMonstersOnRightSide > numOfMonksOnRightSide) && numOfMonksOnRightSide != 0) {
                    isDead = true;
                    sideOfRiverDied = false;
                } else {
                    numOfMonksOnRightSide -= monksOnBoat.size();
                    numOfMonstersOnRightSide -= monstersOnBoat.size();
                    numOfMonksOnLeftSide = monksOnRiverLeftSide.size() + monksOnBoat.size();
                    numOfMonstersOnLeftSide = monstersOnRiverLeftSide.size() + monstersOnBoat.size();
                    if ((numOfMonstersOnRightSide > numOfMonksOnRightSide) && numOfMonksOnRightSide != 0) {
                        isDead = true;
                        sideOfRiverDied = false;
                    } else if ((numOfMonstersOnLeftSide > numOfMonksOnLeftSide) && numOfMonksOnLeftSide != 0) {
                        isDead = true;
                        sideOfRiverDied = true;
                    } else {
                        sideOfRiver = true;
                    }
                }
            }
        }else {
            clearScreen();
            System.out.println("Sorry Cannot move boat! No one is in the Boat!!");
            Thread.sleep(1500);
        }
    }
    private void displayDeadMsg() throws InterruptedException {
        clearScreen();
        if (sideOfRiverDied) System.out.println("Sorry you are dead!" +
                "\nBecause there are more monsters than monks on the left side of the river.");
        else System.out.println("Sorry you are dead!" +
                "\nBecause there are more monsters than monks on the right side of the river.");
        Thread.sleep(2000);
        tryAgain();
    }
    private void startInitialComponentsAndConditions() throws InterruptedException {
        addAllNewEntriesToLeftSide();
        startMainRunningThread();
    }
    private int printOptions() {
        clearScreen();
        printFrame();
        System.out.print("""
                \nOptions
                1. Add Monk to boat
                2. Add Monster to boat
                3. Remove Monk from boat
                4. Remove Monster from boat
                5. Move Boat
                6. Quit
                Select an option:\040""");
        return input.nextInt();
    }
    public void clearScreen() {
        try{
            new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
        }catch(Exception ex){
            System.out.println(ex);
        }
    }
    private void printFrame(){
        PrintStream out = System.out;
        out.printf("Current Lives [%d]\n", numOfTrails);
        out.printf("%88S %n", " MONKS and MONSTERS");
        out.printf("%-30S %51S %55S %n", "Left River side", "Boat", "Right River Side");
        out.printf("%82S\n" , sideOfRiver ? "<<---" : "--->>");
        out.printf("%-40s %40s %55s %n", monksOnRiverLeftSide, (boat.get(0).equalsIgnoreCase("")) ? "[]" : "["+boat.get(0)+"]",monksOnRiverRightSide);
        out.printf("%-40s %40s %55s %n", monstersOnRiverLeftSide, (boat.get(1).equalsIgnoreCase("")) ? "[]" : "["+boat.get(1)+"]", monstersOnRiverRightSide);
    }
    private void displayCJongratsMsg() throws InterruptedException {
        String printLine1 = "\t\t\t\t\t----------	---------	--	--	--------	---------	--------- 	---------	---------";
        String printLine2 = "\t\t\t\t\t|		|	|	| \\     |	|		|	|	|	|	    |		|";
        String printLine3 = "\t\t\t\t\t|		|	|	|  \\    |	|		|       |	|	|	    |		|";
        String printLine4 = "\t\t\t\t\t|		|	|	|   \\   |	|     ---	|--------	|-------|	    |		---------";
        String printLine5 = "\t\t\t\t\t|		|	|	|    \\  |	|	|	|   \\		|	|	    |			|";
        String printLine6 = "\t\t\t\t\t|		|	|	|     \\ |	|	|	|      \\	|	|	    |			|";
        String printLine7 = "\t\t\t\t\t-----------	---------	--	--	---------	--     --	--      --	   		---------";
        for (int i = 0; i < 5; i++) {
            System.out.println(printLine1);
            Thread.sleep(500);
            System.out.println(printLine2);
            Thread.sleep(500);
            System.out.println(printLine3);
            Thread.sleep(500);
            System.out.println(printLine4);
            Thread.sleep(500);
            System.out.println(printLine5);
            Thread.sleep(500);
            System.out.println(printLine6);
            Thread.sleep(500);
            System.out.println(printLine7);
            Thread.sleep(2000);
            if (!(i == (5-1))) clearScreen();
        }
        System.out.println("\n\t\t\t\t\t\t\t\tCongratulations, You have completed the game!\n\t\t\t\t\t\t\t\t\t\tWell done...");
    }

    /**
     * @throws InterruptedException
     * Gives the user the opportunity to try the game again upon death
     */
    private void tryAgain() throws InterruptedException {
        if (numOfTrails == 0){
            displayDeadMsgOutOfTrial();
        }else {
            System.out.print("""
                    \nPlease select an Option
                    1. Try Again
                    2. Quit
                    Input choice:\040""");
            switch (input.nextInt()) {
                case 1 -> tryGameAgain();
                case 2 -> quit();
                default -> invalidInput();
            }
        }
    }

    private void tryGameAgain() throws InterruptedException {
        clearScreen();
        resetGame();
        startInitialComponentsAndConditions();
        startMainRunningThread();
    }

    private void quit() {
        clearScreen();
        System.out.println("Sorry did the monsters scare you!");
        System.out.println("See you next time...");
    }

    private void resetGame() throws InterruptedException {
        sideOfRiver = true;
        quit = false;
        sideOfRiverDied = true;
        isDead = false;
        hasFinished = false;
        numOfMonksOnLeftSide = 0;
        numOfMonstersOnLeftSide = 0;
        numOfMonksOnRightSide = 0;
        numOfMonstersOnRightSide = 0;
        numOfMonstersAndMonksInBoat = 0;
        monksOnRiverLeftSide = new ArrayList<>(3);
        monstersOnRiverLeftSide = new ArrayList<>(3);
        monksOnRiverRightSide = new ArrayList<>(3);
        monstersOnRiverRightSide = new ArrayList<>(3);
        monksOnBoat = new ArrayList<>(1);
        boat = new ArrayList<>(2);
        monstersOnBoat = new ArrayList<>(1);
    }
    private void startMainRunningThread() throws InterruptedException {
        while (true) {
            if (quit) break;
            if (isDead) break;
            if (hasFinished) {
                displayCongratsMsg();
                printFrame();
                break;
            }
            clearScreen();
            switch (printOptions()) {
                case 1 -> addMonkToBoat();
                case 2 -> addMonsterToBoat();
                case 3 -> removeMonkFromBoat();
                case 4 -> removeMonsterFromBoat();
                case 5 -> {
                    moveBoat();
                    if (isDead) {
                        --numOfTrails;
                        displayDeadMsg();
                    }
                }
                case 6 -> {
                    quit();
                    quit = true;
                }
                default -> invalidInput();
            }
        }
    }

    private void displayDeadMsgOutOfTrial() throws InterruptedException {
        System.out.println("\n\nSorry you have used up all 5 Trials!");
        System.out.print("""
                    \nPlease select an Option
                    1. Restart game
                    2. Quit
                    Input choice:\040""");
        switch (input.nextInt()) {
            case 1 -> restartGame();
            case 2 -> quit();
            default -> invalidInput();
        }
    }

    private void restartGame() throws InterruptedException {
        numOfTrails = 5;
        tryGameAgain();
    }

    private void invalidInput() throws InterruptedException {
        clearScreen();
        System.out.println("Sorry Invalid input!");
        Thread.sleep(2000);
    }

    public static void main(String[] args) throws InterruptedException {
        MonksAndMonsters monksAndMonsters = new MonksAndMonsters();
        if (args.length == 0){
            monksAndMonsters.startInitialComponentsAndConditions();
        }else if (args[0].equalsIgnoreCase("unlimitedtrails")){
            monksAndMonsters.startInitialComponentsAndConditions("");
        } else if (args[0].equalsIgnoreCase("norestrictions")) {
            monksAndMonsters.startInitialComponentsAndConditions(true);
        }else{
            System.out.println("""
                    Sorry the argument you passed is invalid.
                    Please try passing either of the following
                    Eg.1) Java MonksAndMonsters norestrictions
                                    OR
                    EG.2) Java MonksAndMonsters unlimitedtrails
                                    OR
                    EG.3) Java unlimitedtrails
                    
                    1. The first option when passed does not include any restrictions when playing the game.
                    2. The second option gives you unlimited number of trials.
                    3. The last option let's you play with both restrictions and a limited number of lives each time.
                    """);
        }
    }

    /**
     * @throws InterruptedException
     * This is a function overload and this is used for when the cli argument "unlimitedtrials" has been passed
     */
    private void startMainRunningThread(String unlimitedTrials) throws InterruptedException {
        while (true) {
            if (quit) break;
            if (isDead) break;
            if (hasFinished) {
                displayCongratsMsg();
                printFrame("");
                break;
            }
            clearScreen();
            switch (printOptions("")) {
                case 1 -> addMonkToBoat();
                case 2 -> addMonsterToBoat();
                case 3 -> removeMonkFromBoat();
                case 4 -> removeMonsterFromBoat();
                case 5 -> {
                    moveBoat();
                    if (isDead) displayDeadMsg("");
                }
                case 6 -> {
                    quit();
                    quit = true;
                }
                default -> invalidInput();
            }
        }
    }
    private void printFrame(String unlimitedTrials){
        PrintStream out = System.out;
        out.printf("Current Lives [Infinity]---UNLIMITED TRIALS\n");
        out.printf("%88S %n", " MONKS and MONSTERS");
        out.printf("%-30S %51S %55S %n", "Left River side", "Boat", "Right River Side");
        out.printf("%82S\n" , sideOfRiver ? "<<---" : "--->>");
        out.printf("%-40s %40s %55s %n", monksOnRiverLeftSide, (boat.get(0).equalsIgnoreCase("")) ? "[]" : "["+boat.get(0)+"]",monksOnRiverRightSide);
        out.printf("%-40s %40s %55s %n", monstersOnRiverLeftSide, (boat.get(1).equalsIgnoreCase("")) ? "[]" : "["+boat.get(1)+"]", monstersOnRiverRightSide);
    }
    private int printOptions(String unlimitedTrials) {
        clearScreen();
        printFrame("");
        System.out.print("""
                \nOptions
                1. Add Monk to boat
                2. Add Monster to boat
                3. Remove Monk from boat
                4. Remove Monster from boat
                5. Move Boat
                6. Quit
                Select an option:\040""");
        return input.nextInt();
    }
    private void startInitialComponentsAndConditions(String unlimitedTrials) throws InterruptedException {
        addAllNewEntriesToLeftSide();
        startMainRunningThread("");
    }
    private void tryAgain(String unlimitedTrails) throws InterruptedException {
        System.out.print("""
                \nPlease select an Option
                1. Try Again
                2. Quit
                Input choice:\040""");
        switch (input.nextInt()) {
            case 1 -> tryGameAgain("");
            case 2 -> quit();
            default -> invalidInput();
        }
    }
    private void displayDeadMsg(String unlimitedTrials) throws InterruptedException {
        clearScreen();
        if (sideOfRiverDied) System.out.println("Sorry you are dead!" +
                "\nBecause there are more monsters than monks on the left side of the river.");
        else System.out.println("Sorry you are dead!" +
                "\nBecause there are more monsters than monks on the right side of the river.");
        Thread.sleep(2000);
        tryAgain("");
    }
    private void tryGameAgain(String unlimitedTrails) throws InterruptedException {
        clearScreen();
        resetGame();
        startInitialComponentsAndConditions("");
        startMainRunningThread("");
    }
    //
    //
    //End of cheat for unlimited trials
    /**
     * @throws InterruptedException
     * This is a function overload and this is used for when the cli argument "norestriction" has been passed
     */
    private void startMainRunningThread(boolean noRestriction) throws InterruptedException {
        while (true) {
            if (quit) break;
            if (hasFinished) {
                clearScreen();
                displayCongratsMsg();
                printFrame(true);
                break;
            }
            clearScreen();
            switch (printOptions(true)) {
                case 1 -> addMonkToBoat();
                case 2 -> addMonsterToBoat();
                case 3 -> removeMonkFromBoat();
                case 4 -> removeMonsterFromBoat();
                case 5 -> {
                    moveBoat(true);
                    if (isDead) displayDeadMsg(true);
                }
                case 6 -> {
                    quit();
                    quit = true;
                }
                default -> invalidInput();
            }
        }
    }
    private void printFrame(boolean noRestriction){
        PrintStream out = System.out;
        out.printf("Current Lives [Infinity] ---NO RESTRICTIONS\n");
        out.printf("%88S %n", " MONKS and MONSTERS");
        out.printf("%-30S %51S %55S %n", "Left River side", "Boat", "Right River Side");
        out.printf("%82S\n" , sideOfRiver ? "<<---" : "--->>");
        out.printf("%-40s %40s %55s %n", monksOnRiverLeftSide, (boat.get(0).equalsIgnoreCase("")) ? "[]" : "["+boat.get(0)+"]",monksOnRiverRightSide);
        out.printf("%-40s %40s %55s %n", monstersOnRiverLeftSide, (boat.get(1).equalsIgnoreCase("")) ? "[]" : "["+boat.get(1)+"]", monstersOnRiverRightSide);
    }
    private int printOptions(boolean noRestriction) {
        clearScreen();
        printFrame(true);
        System.out.print("""
                \nOptions
                1. Add Monk to boat
                2. Add Monster to boat
                3. Remove Monk from boat
                4. Remove Monster from boat
                5. Move Boat
                6. Quit
                Select an option:\040""");
        return input.nextInt();
    }
    private void startInitialComponentsAndConditions(boolean noRestriction) throws InterruptedException {
        addAllNewEntriesToLeftSide();
        startMainRunningThread(true);
    }
    private void tryAgain(boolean noRestriction) throws InterruptedException {
        System.out.print("""
                \nPlease select an Option
                1. Try Again
                2. Quit
                Input choice:\040""");
        switch (input.nextInt()) {
            case 1 -> tryGameAgain(true);
            case 2 -> quit();
            default -> invalidInput();
        }
    }
    private void displayDeadMsg(boolean noRestriction) throws InterruptedException {
        clearScreen();
        if (sideOfRiverDied) System.out.println("Sorry you are dead!" +
                "\nBecause there are more monsters than monks on the left side of the river.");
        else System.out.println("Sorry you are dead!" +
                "\nBecause there are more monsters than monks on the right side of the river.");
        Thread.sleep(2000);
        tryAgain(true);
    }
    private void tryGameAgain(boolean noRestriction) throws InterruptedException {
        clearScreen();
        resetGame();
        startInitialComponentsAndConditions(true);
        startMainRunningThread(true);
    }
    private void moveBoat(boolean noRestriction) throws InterruptedException {
        sideOfRiver = !sideOfRiver;
    }
    //End of cheat for no restrictions trials
}