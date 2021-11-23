



// Handle infinite scroll
const [lowestSeen, setLowestSeen] = useState(0);
const [highestSeen, setHighestSeen] = useState(20);
const [lastScrollHeight, setLastScrollHeight] = useState(0)
const [lastScrollFireTime, setLastScrollFireTime] = useState(0)
const [scrollTimer, setScrollTimer] = useState(0)




console.log(`Lowest seen is ${lowestSeen} and highest seen is ${highestSeen}`)
// Watch the scroll event for what is on the screen
const handleScroll = (event) => {
    console.log(event.target.scrollHeight)


    // Handle the scrolling logic
    function processScroll(event) {
        // console.log(new Date().getTime().toString());
        // console.log(event.target.scrollTop)

        if (event.target.scrollTop > lastScrollHeight) {
            setLastScrollHeight(lastScrollHeight + 1)
            setHighestSeen(highestSeen + 1)
            setLowestSeen(lowestSeen + 1)
        } else {
            setLastScrollHeight(lastScrollHeight - 1)
            if (lowestSeen < 1) {
                setLowestSeen(0);
            } else {
                setHighestSeen(highestSeen - 1)
                setLowestSeen(lowestSeen - 1)
            }
        }

        setParsedResults(results.slice(lowestSeen, highestSeen))

    }








    // Throttle the scrolling
    // ==============================
    var minScrollTime = 100;
    var now = new Date().getTime();

    if (!scrollTimer) {
        if (now - lastScrollFireTime > (3 * minScrollTime)) {
            processScroll(event);   // fire immediately on first scroll
            setLastScrollFireTime(now)
        }
        setScrollTimer(setTimeout(function () {
            setScrollTimer(null)
            setLastScrollFireTime(new Date().getTime())
            processScroll(event);
        }, minScrollTime));
    }
    //================================
    // End throttle the scrolling



}

