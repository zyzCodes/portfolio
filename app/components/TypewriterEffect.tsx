'use client'

import {
    useState,
    useEffect,
    useRef,
    startTransition,
    type CSSProperties,
} from "react"

interface TypewriterEffectProps {
    words: string[]
    typingSpeed?: number
    deletingSpeed?: number
    pauseDuration?: number
    cursorColor?: string
    cursorWidth?: number
    cursorHeight?: number
    textColor?: string
    className?: string
    style?: CSSProperties
}

export default function TypewriterEffect({
    words = ["Hello", "World"],
    typingSpeed = 100,
    deletingSpeed = 60,
    pauseDuration = 1000,
    cursorColor = "#FFFFFF",
    cursorWidth = 2,
    cursorHeight = 100,
    textColor = "#FFFFFF",
    className = "",
    style = {},
}: TypewriterEffectProps) {
    const [displayed, setDisplayed] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [showCursor, setShowCursor] = useState(true)
    const timeoutRef = useRef<number | null>(null)
    const blinkRef = useRef<number | null>(null)

    const currentWord = words.length > 0 ? words[wordIndex % words.length] : ""

    // Typing/Deleting Effect
    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)

        let delay = typingSpeed

        if (!isDeleting && charIndex < currentWord.length) {
            delay = typingSpeed
            timeoutRef.current = window.setTimeout(() => {
                startTransition(() => {
                    setDisplayed(currentWord.slice(0, charIndex + 1))
                    setCharIndex(charIndex + 1)
                })
            }, delay)
        } else if (!isDeleting && charIndex === currentWord.length) {
            // Pause at end of word
            timeoutRef.current = window.setTimeout(() => {
                startTransition(() => setIsDeleting(true))
            }, pauseDuration)
        } else if (isDeleting && charIndex > 0) {
            delay = deletingSpeed
            timeoutRef.current = window.setTimeout(() => {
                startTransition(() => {
                    setDisplayed(currentWord.slice(0, charIndex - 1))
                    setCharIndex(charIndex - 1)
                })
            }, delay)
        } else if (isDeleting && charIndex === 0) {
            // Pause before next word
            timeoutRef.current = window.setTimeout(() => {
                startTransition(() => {
                    setIsDeleting(false)
                    setWordIndex((wordIndex + 1) % words.length)
                })
            }, pauseDuration)
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [
        charIndex,
        isDeleting,
        wordIndex,
        currentWord,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        words.length,
    ])

    // Reset charIndex when wordIndex changes
    useEffect(() => {
        if (!isDeleting) {
            startTransition(() => setCharIndex(0))
        }
    }, [wordIndex, isDeleting])

    // Blinking Cursor Effect
    useEffect(() => {
        if (blinkRef.current) clearInterval(blinkRef.current)
        blinkRef.current = window.setInterval(() => {
            startTransition(() => setShowCursor((v) => !v))
        }, 500)
        return () => {
            if (blinkRef.current) clearInterval(blinkRef.current)
        }
    }, [])

    return (
        <span
            className={className}
            style={{
                ...style,
                color: textColor,
                display: "inline-block",
                minWidth: 1,
                minHeight: "1.2em",
                whiteSpace: "nowrap",
            }}
            aria-live="polite"
        >
            {displayed}
            <span
                aria-hidden="true"
                style={{
                    display: "inline-block",
                    background: cursorColor,
                    width: cursorWidth,
                    height: "1em",
                    marginLeft: 4,
                    marginRight: 2,
                    verticalAlign: "baseline",
                    opacity: showCursor ? 1 : 0,
                    transition: "opacity 0.1s",
                    borderRadius: 2,
                }}
            />
        </span>
    )
}
