x=10

while [ $x -gt 0 ]

do

    sleep 1s

    clear


    # echo "$x seconds until blast off"
    x=$(( $x - 1 ))

done

echo "Precondition: i > 0"
echo "Postcondition: i < 0"
echo "Useage: x = intPositive(int i)"
