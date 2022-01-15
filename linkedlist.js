/*

 let arr = [23, "hello", "1", "100"]

arr[1] = "hello"
arr[arr.length-1] = "100"

let LL = 23 -> "hello" -> "1" -> "100" -> null
          |
        Head

        LL = [1|null]-> null
ll = []
 Nodes [data|next]

class

*/

//creating a Node

function Node (data){
    this.data = data
    this.next = null
}

//creating a Linked List

function LinkedList (){
    this.head =  null
}

LinkedList.prototype.add = function(data){
    let node = new Node(data) // [5|null]

    if (this.head === null){
        this.head = node;
        
    }
    else{
        let headRef = this.head;
        while (headRef.next != null){
            headRef = headRef.next
        }
        headRef.next = node
    }

}
/*
create a fucntion that will find if an elment exists in the LL
*/

LinkedList.prototype.find = function(value){
    //return true if the value exists in the linkedlist

    let headRef = this.head

    while (headRef.next != null){
        if (headRef.data === value){
            return true
        }
        headRef = headRef.next
    }
    if (headRef.data === value){
        return true
    }
    else{
        return false
    }

}

let ll = new LinkedList ()

ll.add(5)
ll.add(6)
ll.add("hello")
ll.add("kyrie")
ll.add("nba")

console.log(ll.find("kyrie")) //false
console.log(ll.find("hello")) //true
console.log(ll.find("nba"))

console.log(ll)

