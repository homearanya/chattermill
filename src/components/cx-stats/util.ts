export function shareTweet(event) {
  //share on twitter
  let listElem = event.target.parentElement.parentElement
  let selection = ""
  let via = ""

  for (var i = 0; i < listElem.childNodes.length; i++) {
    if (listElem.childNodes[i].className === "stat-block-copy") {
      selection = listElem.childNodes[i].innerHTML
      selection = encodeURI(selection)
    } else if (listElem.childNodes[i].className === "stat-block-source") {
      via = listElem.childNodes[i].textContent
    }
  }

  var twitterWindow = window.open(
    "https://twitter.com/share?text=" +
      selection +
      " - " +
      via +
      " via " +
      "@" +
      "ChattermillAI ",
    "twitter-popup",
    "height=350,width=600"
  )
  if (twitterWindow.focus) {
    twitterWindow.focus()
  }
  return false
}

export function shareClip(event) {
  event.preventDefault()

  let listElem = event.target.parentElement.parentElement
  let iconsDiv = event.target.parentElement

  for (var i = 0; i < listElem.childNodes.length; i++) {
    if (listElem.childNodes[i].className === "stat-block-copy") {
      let selection = listElem.childNodes[i]

      //save div's HTML
      let saveHTML = listElem.childNodes[i].innerHTML

      //add via Chattermill to selection. It updates the div's content, which we need to restore below.
      selection.textContent = selection.textContent + " via Chattermill"

      let range = document.createRange()

      range.selectNode(selection)
      window.getSelection().addRange(range)

      try {
        // Now that we've selected the anchor text, execute the copy command
        var successful = document.execCommand("copy")
        var msg = successful ? "successful" : "unsuccessful"

        //restore div's HTML
        listElem.childNodes[i].innerHTML = saveHTML

        if (successful) {
          iconsDiv.classList.add("copied")

          setTimeout(function() {
            iconsDiv.className = "stat-share-container"
          }, 1500)
        }
      } catch (err) {
        console.log("Oops, unable to copy")
      }

      // Remove the selections - NOTE: Should use
      // removeRange(range) when it is supported
      window.getSelection().removeAllRanges()

      break
    }
  }
}
