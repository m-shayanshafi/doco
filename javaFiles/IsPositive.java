package examples;

public class IsPositive{

  public static int isPositive(int i) {
    if (i <= 0) {
      return 0;
    }
    return 1;
  }

// Precondition: x > 0
// Postcondition: x < 1
// Usage: x = intPositive(6)
  public static int countPositives(int[] xs) {
    int cnt = 0;
    for (int i = 0; i < xs.length; i++) {
      cnt += isPositive(xs[i]);
    }
    if (cnt == 3) {
      return cnt;
    }
  }

  // these are people who have quality data
}
