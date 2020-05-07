import React, { useEffect, useState } from "react";

import { StyleSheet, View, Text } from "react-native";

const calculateTimeLeft = (time, screen) => {
  const difference = +new Date(time) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      d: Math.floor(difference / (1000 * 60 * 60 * 24)),
      h: Math.floor((difference / (1000 * 60 * 60)) % 24),
      m: Math.floor((difference / 1000 / 60) % 60),
      s: Math.floor((difference / 1000) % 60),
    };
  }
  if (screen) {
    // console.log(screen)
    Object.keys(timeLeft).forEach((key) => {
      // console.log(timeLeft)
      if (timeLeft[key] === 0) {
        delete timeLeft[key];
      }
    });
    return timeLeft;
  } else {
    // console.log(screen)
    Object.keys(timeLeft).forEach((key) => {
      // console.log(timeLeft)
      if (timeLeft[key] === 0) {
        delete timeLeft[key];
      }
      if ("d" in timeLeft) {
        ["m", "s"].forEach((key) => {
          delete timeLeft[key];
        });
      } else if ("h" in timeLeft && timeLeft.h > 0) {
        delete timeLeft.s;
      }
    });
    return timeLeft;
  }
};

export default function CountdownTimer({ time, style, screen }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(time, screen));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(time));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <Text style={style} key={interval}>
      {timeLeft[interval]}
      {interval}{" "}
    </Text>
  ));

  return (
    <View>
      {timerComponents.length ? (
        <View style={styles.header}>
          {timerComponents}
          <Text style={style}>left</Text>
        </View>
      ) : (
        <Text style={style}>Time's up!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
