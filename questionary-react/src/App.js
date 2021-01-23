import React from 'react';
import './Heading.css';
import './stylesheet.css';
import './navbar.css';
import collage from './cdac-image.jpg';
import logo from './logo.png';
import CDACicon from './CDAC-icon.jpg';
import facebookicon from './facebook-icon.png';
import linkedinicon from './linkedin-icon.png';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';





function App() {
  return (
  <Router>
  
    <div class="row">
		<a name="Q1"></a><div class="col adjustment">
				<img src={logo} id="logo" />
				<h1 id="adj">The.Questionary.Stockpile</h1>
		</div>
	  </div>
    <div className="row">
          <div className="container-fluid Topnav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Java">Java</Link></li>
              <li><Link to="/Database">Database</Link></li>
              <li><Link to="/WebTechnology">Web Technology</Link></li>
              <li><Link to="/QuestionBank">Question Bank</Link></li>
			        <li><Link to="/Workspace">Workspace</Link></li>
            </ul>
          </div>
        </div>

   {/*Navogation Link*/}
      <Route exact path="/">
            <Homepage />
      </Route>

      <Route path="/Java">
            <Java />
      </Route>

      <Route path="/Database">
            <Database />
      </Route>

      <Route path="/WebTechnology">
            <WebTechnology />
      </Route>

      <Route path="/QuestionBank">
            <QuestionBank />
      </Route>

      <Route path="/Workspace">
            <Workspace />
      </Route>
      
  </Router>
  );
}
 


function Homepage()
{
  return (<div>
  <div className="row container-fluid">
    <div className="col-2 columnmodific">
				<ol>
						<li><a href="#Q1">Welcome To Module Question Bank.....</a></li>
						<hr/>
						<h5>Follow us on</h5>
					<a href="https://www.cdac.in/index.aspx?id=mumbai">
					<img alt="cdac-mumbai" src={CDACicon} width="10%" height="10%" style={{paddingLeft: '2%'}} />
					</a>

					<a href="https://www.facebook.com/cdacmumbai">
						<img alt="cdac-facebook" src={facebookicon} width="10%" height="10%" style={{paddingLeft: '2%'}}/>
						</a>

					<a href="https://www.linkedin.com/in/c-dac-mumbai-4b26111ba/">
						<img alt="cdac-linkedin" src={linkedinicon} width="10%" height="10%" style={{paddingLeft: '2%'}}/>						</a>

				<hr/>
				</ol>
		</div>
	
        <div className="col-10" className="add">
          <div className="section">
                  <p>
                          <h4 style={{color:'teal'}}>C-DAC MUMBAI</h4><hr/>

                          <img src={collage} style={{float: 'right', height: '28%', width: '36%', border: '4px outset'}} alt="collage" />


                        &emsp; &emsp; &emsp; C-DAC, Mumbai (formerly National Centre for Software Technology) was established in the year 1985 as a National Laboratory, for R&D in Software Technology. Currently, the centre is having its offices in Juhu (Mumbai), Kharghar (Navi Mumbai) and Nariman Point (Mumbai)<br />

                        &emsp; &emsp; &emsp; From the decades, the centre is carrying out R&D in Software-intensive System and Technologies for various sectors. This has help C-DAC to Enhance India's role as a leader in Software Engineering and Allied Disciplines. Govt. of India which aims to make all Government services accessible to the common man in his locality, through common service delivery on state and national level.<br />

                        Apart from this, centre is also involved in Language Computing, Computer Networks and Internet Engineering, IT Systems and Solutions, Knowledge based Computer Systems, Educational Technology Unit, Open Source Software and Biometrics.Since 2011-2012, CDAC Mumbai is offering the well-established 6 months’ full-time Post-Graduate Diploma in Advanced Computing (PG-DAC) and Mobile Computing (PG-DMC) for MSc/MCA/Engineering graduates.<br />
                        
                        &emsp; &emsp; &emsp; Every year, two batches of these courses are commenced in August and February. Students are admitted through the national admission test, C-CAT.
                        With the right blend of academic and industry-oriented pedagogy, C-DAC Mumbai has always achieved excellent placement records of up to 100%.
                        The educational role of the centre conducts a well-established One-year Full-time Diploma in the field of Advanced Software Technology (FPGDST) for graduates and a Six-month Part-time Diploma in the field of Information Security (PGDIS).<br/>					
                      </p>
          </div>
         </div>
  </div>
            <footer>
              <div class="row footer">
                  <h6>Last Updated: Tuesday, January 12, 2021<br />
                    Centre for Development of Advanced Computing (C-DAC Mumbai)</h6>
              </div>
            </footer>
  </div>
      );
    }
 


function Java()
{
 
  return (<div>
    <div className="row container-fluid">
      <div className="col-2 columnmodific">
          <ol>
            <li><a href="#Q1">General Questions about Java</a></li>
						<li><a href="#Q2">Java Threads</a></li>
						<li><a href="#Q3">Java Collections</a></li>
						<li><a href="#Q4">Garbage Collectors</a></li>
						<li><a href="#Q5">Exception Handling</a></li>
              <hr/>
              <h5>Follow us on</h5>
            <a href="https://www.cdac.in/index.aspx?id=mumbai">
            <img alt="cdac-mumbai" src={CDACicon} width="10%" height="10%" style={{paddingLeft: '2%'}} />
            </a>
  
            <a href="https://www.facebook.com/cdacmumbai">
              <img alt="cdac-facebook" src={facebookicon} width="10%" height="10%" style={{paddingLeft: '2%'}}/>
              </a>
  
            <a href="https://www.linkedin.com/in/c-dac-mumbai-4b26111ba/">
              <img alt="cdac-linkedin" src={linkedinicon} width="10%" height="10%" style={{paddingLeft: '2%'}}/>						</a>

          <hr/>
          </ol>
      </div>
    
          <div className="col-10" className="add">
          <div class= "section">
					<p>
						<h3>General Questions about Java</h3><br/>
							<h5>What is JVM ? Why is Java called the Platform Independent Programming Language?</h5><hr/>

A Java virtual machine (JVM) is a process virtual machine that can execute Java bytecode. Each Java source file is compiled
into a bytecode file, which is executed by the JVM. Java was designed to allow application programs to be built that could be
run on any platform, without having to be rewritten or recompiled by the programmer for each separate platform. A Java virtual
machine makes this possible, because it is aware of the specific instruction lengths and other particularities of the underlying
hardware platform.<br/><br/>

<h5>What is the Difference between JDK and JRE ?</h5><hr/>

The Java Runtime Environment (JRE) is basically the Java Virtual Machine (JVM) where your Java programs are being executed.
It also includes browser plugins for applet execution. The Java Development Kit (JDK) is the full featured Software Development
Kit for Java, including the JRE, the compilers and tools (like JavaDoc, and Java Debugger), in order for a user to develop, compile
and execute Java applications.<br/><br/>

<h5>What does the “static” keyword mean ? Can you override private or static
method in Java ?</h5><hr/>
The static keyword denotes that a member variable or method can be accessed, without requiring an instantiation of the class to
which it belongs. A user cannot override static methods in Java, because method overriding is based upon dynamic binding at
runtime and static methods are statically binded at compile time. A static method is not associated with any instance of a class
so the concept is not applicable.<br/><br/>

<h5>Can you access non static variable in static context ?</h5><hr/>
A static variable in Java belongs to its class and its value remains the same for all its instances. A static variable is initialized
when the class is loaded by the JVM. If your code tries to access a non-static variable, without any instance, the compiler will
complain, because those variables are not created yet and they are not associated with any instance.<br/><br/>

<h5>What are the Data Types supported by Java ? What is Autoboxing and Unboxing ?</h5><hr/>
The eight primitive data types supported by the Java programming language are:<br/>
• byte<br/>
• short<br/>
• int<br/>
• long<br/>
• float<br/>
• double<br/>
• boolean<br/>
• char<br/>
Autoboxing is the automatic conversion made by the Java compiler between the primitive types and their corresponding object
wrapper classes. For example, the compiler converts an int to an Integer, a double to a Double, and so on. If the conversion goes
the other way, this operation is called unboxing.<br/><br/>

<h5>What is Function Overriding and Overloading in Java ?</h5><hr/>
Method overloading in Java occurs when two or more methods in the same class have the exact same name, but different
parameters. On the other hand, method overriding is defined as the case when a child class redefines the same method as a parent
class. Overridden methods must have the same name, argument list, and return type. The overriding method may not limit the
access of the method it overrides.<br/><br/>

<h5>What is a Constructor, Constructor Overloading in Java and Copy-Constructor</h5><hr/>
A constructor gets invoked when a new object is created. Every class has a constructor. In case the programmer does not provide
a constructor for a class, the Java compiler (Javac) creates a default constructor for that class. The constructor overloading is
similar to method overloading in Java. Different constructors can be created for a single class. Each constructor must have its
own unique parameter list. Finally, Java does support copy constructors like C++, but the difference lies in the fact that Java
doesn’t create a default copy constructor if you don’t write your own.<br/><br/>

<h5>Does Java support multiple inheritance ?</h5><hr/>
No, Java does not support multiple inheritance. Each class is able to extend only on one class, but is able to implement more than
one interfaces.<br/><br/>

<h5>What is the difference between an Interface and an Abstract class ?</h5><hr/>
Java provides and supports the creation both of abstract classes and interfaces. Both implementations share some common
characteristics, but they differ in the following features:<br/>
• All methods in an interface are implicitly abstract. On the other hand, an abstract class may contain both abstract and nonabstract methods.<br/>
• A class may implement a number of Interfaces, but can extend only one abstract class.<br/>
• In order for a class to implement an interface, it must implement all its declared methods. However, a class may not implement
all declared methods of an abstract class. Though, in this case, the sub-class must also be declared as abstract.<br/>
• Abstract classes can implement interfaces without even providing the implementation of interface methods.<br/>
• Variables declared in a Java interface is by default final. An abstract class may contain non-final variables.<br/>
• Members of a Java interface are public by default. A member of an abstract class can either be private, protected or public.<br/>
• An interface is absolutely abstract and cannot be instantiated. An abstract class also cannot be instantiated, but can be invoked
if it contains a main method.<br/>
Also check out the Abstract class and Interface differences for JDK 8.<br/><br/>

<h5>What are pass by reference and pass by value ?</h5><hr/>
When an object is passed by value, this means that a copy of the object is passed. Thus, even if changes are made to that object,
it doesn’t affect the original value. When an object is passed by reference, this means that the actual object is not passed, rather
a reference of the object is passed. Thus, any changes made by the external method, are also reflected in all places.<br/><br/>
					</p>
				</div>
				
				<div class= "section">
<p>
					<br/><a name="Q2"></a><h3>Java Threads</h3><br/>
<h5>What is the difference between processes and threads ?</h5><hr/>
A process is an execution of a program, while a Thread is a single execution sequence within a process. A process can contain
multiple threads. A Thread is sometimes called a lightweight process.<br/><br/>

<h5>Explain different ways of creating a thread. Which one would you prefer and
why ?</h5><hr/>
There are three ways that can be used in order for a Thread to be created:<br/>
• A class may extend the Thread class.<br/>
• A class may implement the Runnable interface.<br/>
• An application can use the Executor framework, in order to create a thread pool.<br/>
The Runnable interface is preferred, as it does not require an object to inherit the Thread class. In case your application design
requires multiple inheritance, only interfaces can help you. Also, the thread pool is very efficient and can be implemented and
used very easily.<br/><br/>

<h5>Explain the available thread states in a high-level.</h5><hr/>
During its execution, a thread can reside in one of the following states:<br/>
• Runnable: A thread becomes ready to run, but does not necessarily start running immediately.<br/>
• Running: The processor is actively executing the thread code.<br/>
• Waiting: A thread is in a blocked state waiting for some external processing to finish.<br/>
• Sleeping: The thread is forced to sleep.<br/>
• Blocked on I/O: Waiting for an I/O operation to complete.<br/>
• Blocked on Synchronization: Waiting to acquire a lock.<br/>
• Dead: The thread has finished its execution.<br/><br/>

<h5>What is the difference between a synchronized method and a synchronized
block ?</h5><hr/>
In Java programming, each object has a lock. A thread can acquire the lock for an object by using the synchronized keyword.
The synchronized keyword can be applied in a method level (coarse grained lock) or block level of code (fine grained lock).
<br/><br/>
<h5>How does thread synchronization occurs inside a monitor ? What levels of
synchronization can you apply ?</h5><hr/>
The JVM uses locks in conjunction with monitors. A monitor is basically a guardian that watches over a sequence of synchronized
code and ensuring that only one thread at a time executes a synchronized piece of code. Each monitor is associated with an object
reference. The thread is not allowed to execute the code until it obtains the lock.<br/><br/>

<h5>What’s a deadlock ?</h5><hr/>
A condition that occurs when two processes are waiting for each other to complete, before proceeding. The result is that both
processes wait endlessly.<br/><br/>

<h5>How do you ensure that N threads can access N resources without deadlock ?</h5><hr/>
A very simple way to avoid deadlock while using N threads is to impose an ordering on the locks and force each thread to follow
that ordering. Thus, if all threads lock and unlock the mutexes in the same order, no deadlocks can arise.<br/><br/>

					</p>
				</div>
				
			<div class= "section">
			<p>
				<a name="Q3"></a><h3>Java Collections</h3><br/>
				<h5> What are the basic interfaces of Java Collections Framework ?</h5><hr/>
				
				Java Collections Framework provides a well designed set of interfaces and classes that support operations on a collections of
				objects. The most basic interfaces that reside in the Java Collections Framework are:<br/>
				• Collection, which represents a group of objects known as its elements.<br/>
				• Set, which is a collection that cannot contain duplicate elements.<br/>
				• List, which is an ordered collection and can contain duplicate elements.<br/>
				• Map, which is an object that maps keys to values and cannot contain duplicate keys.<br/><br/>
				
				<h5>Why Collection doesn’t extend Cloneable and Serializable interfaces ?</h5><hr/>
				The Collection interface specifies groups of objects known as elements. Each concrete implementation of a Collection can choose
				its own way of how to maintain and order its elements. Some collections allow duplicate keys, while some other collections don’t.
				The semantics and the implications of either cloning or serialization come into play when dealing with actual implementations.
				Thus, the concrete implementations of collections should decide how they can be cloned or serialized.<br/><br/>
				
				<h5>What is an Iterator ?</h5><hr/>
				The Iterator interface provides a number of methods that are able to iterate over any Collection. Each Java Collection contains
				the iterator method that returns an Iterator instance. Iterators are capable of removing elements from the underlying collection
				during the iteration.
				
				<h5>What differences exist between Iterator and ListIterator ?</h5><hr/>
				The differences of these elements are listed below:<br/>
				• An Iterator can be used to traverse the Set and List collections, while the ListIterator can be used to iterate only over Lists.<br/>
				• The Iterator can traverse a collection only in forward direction, while the ListIterator can traverse a List in both directions.<br/>
				• The ListIterator implements the Iterator interface and contains extra functionality, such as adding an element, replacing an
				element, getting the index position for previous and next elements, etc.<br/><br/>
				
				<h5>What is difference between fail-fast and fail-safe ?</h5><hr/>
				The Iterator’s fail-safe property works with the clone of the underlying collection and thus, it is not affected by any modification
				in the collection. All the collection classes in java.util package are fail-fast, while the collection classes in java.util.concurrent
				are fail-safe. Fail-fast iterators throw a ConcurrentModificationException, while fail-safe iterator never throws such
				an exception.<br/><br/>
				
				<h5>How HashMap works in Java ?</h5><hr/>
				A HashMap in Java stores key-value pairs. The HashMap requires a hash function and uses hashCode and equals methods,
				in order to put and retrieve elements to and from the collection respectively. When the put method is invoked, the HashMap
				calculates the hash value of the key and stores the pair in the appropriate index inside the collection. If the key exists, its value
				is updated with the new value. Some important characteristics of a HashMap are its capacity, its load factor and the threshold
				resizing.<br/><br/>
				
				<h5>What is the importance of hashCode() and equals() methods ?</h5><hr/>
				In Java, a HashMap uses the hashCode and equals methods to determine the index of the key-value pair and to detect duplicates.
				More specifically, the hashCode method is used in order to determine where the specified key will be stored. Since different keys
				may produce the same hash value, the equals method is used, in order to determine whether the specified key actually exists in
				the collection or not. Therefore, the implementation of both methods is crucial to the accuracy and efficiency of the HashMap.<br/><br/>
				
				<h5>What differences exist between HashMap and Hashtable ?</h5><hr/>
				Both the HashMap and Hashtable classes implement the Map interface and thus, have very similar characteristics. However, they
				differ in the following features:<br/>
				• A HashMap allows the existence of null keys and values, while a Hashtable doesn’t allow neither null keys, nor null values.<br/>
				• A Hashtable is synchronized, while a HashMap is not. Thus, HashMap is preferred in single-threaded environments, while a
				Hashtable is suitable for multi-threaded environments.<br/>
				• A HashMap provides its set of keys and a Java application can iterate over them. Thus, a HashMap is fail-fast. On the other
				hand, a Hashtable provides an Enumeration of its keys.<br/>
				• The Hashtable class is considered to be a legacy class.<br/><br/>
				
				
				<h5>What is difference between Array and ArrayList ? When will you use Array over
				ArrayList ?</h5><hr/>
				The Array and ArrayList classes differ on the following features:
				• Arrays can contain primitive or objects, while an ArrayList can contain only objects.<br/>
				• Arrays have fixed size, while an ArrayList is dynamic.<br/>
				• An ArrayList provides more methods and features, such as addAll, removeAll, iterator, etc.<br/>
				• For a list of primitive data types, the collections use autoboxing to reduce the coding effort. However, this approach makes
				them slower when working on fixed size primitive data types.<br/><br/>
				
				<h5>What is difference between ArrayList and LinkedList ?</h5><hr/>
				Both the ArrayList and LinkedList classes implement the List interface, but they differ on the following features:
				• An ArrayList is an index based data structure backed by an Array. It provides random access to its elements with a performance
				equal to O(1). On the other hand, a LinkedList stores its data as list of elements and every element is linked to its previous and
				next element. In this case, the search operation for an element has execution time equal to O(n).<br/>
				• The Insertion, addition and removal operations of an element are faster in a LinkedList compared to an ArrayList, because
				there is no need of resizing an array or updating the index when an element is added in some arbitrary position inside the
				collection.<br/>
				• A LinkedList consumes more memory than an ArrayList, because every node in a LinkedList stores two references, one for its
				previous element and one for its next element.<br/><br/>
				 
				
				<h5>What is Comparable and Comparator interface ? List their differences.</h5><hr/>
				Java provides the Comparable interface, which contains only one method, called compareTo. This method compares two objects,
				in order to impose an order between them. Specifically, it returns a negative integer, zero, or a positive integer to indicate that the
				input object is less than, equal or greater than the existing object. Java provides the Comparator interface, which contains two
				methods, called compare and equals. The first method compares its two input arguments and imposes an order between them.
				It returns a negative integer, zero, or a positive integer to indicate that the first argument is less than, equal to, or greater than
				the second. The second method requires an object as a parameter and aims to decide whether the input object is equal to the
				comparator. The method returns true, only if the specified object is also a comparator and it imposes the same ordering as the
				comparator.<br/><br/>
				
				<h5>What is Java Priority Queue ?</h5><hr/>
				The PriorityQueue is an unbounded queue, based on a priority heap and its elements are ordered in their natural order. At the time
				of its creation, we can provide a Comparator that is responsible for ordering the elements of the PriorityQueue. A PriorityQueue
				doesn’t allow null values, those objects that doesn’t provide natural ordering, or those objects that don’t have any comparator
				associated with them. Finally, the Java PriorityQueue is not thread-safe and it requires O(log(n)) time for its enqueing and
				dequeing operations.<br/><br/>
				
				<h5>What do you know about the big-O notation and can you give some examples
				with respect to different data structures ?</h5><hr/>
				The Big-O notation simply describes how well an algorithm scales or performs in the worst case scenario as the number of elements in a data structure increases. The Big-O notation can also be used to describe other behavior such as memory consumption.
				Since the collection classes are actually data structures, we usually use the Big-O notation to chose the best implementation to
				use, based on time, memory and performance. Big-O notation can give a good indication about performance for large amounts
				of data.<br/><br/>
				 
				<h5>What is the tradeoff between using an unordered array versus an ordered
				array ?</h5><hr/>
				The major advantage of an ordered array is that the search times have time complexity of O(log n), compared to that of an
				unordered array, which is O (n). The disadvantage of an ordered array is that the insertion operation has a time complexity of
				O(n), because the elements with higher values must be moved to make room for the new element. Instead, the insertion operation
				for an unordered array takes constant time of O(1).<br/><br/>
				
				<h5>What are some of the best practices relating to the Java Collection framework?</h5><hr/>
				• Choosing the right type of the collection to use, based on the application’s needs, is very crucial for its performance. For
				example if the size of the elements is fixed and know a priori, we shall use an Array, instead of an ArrayList.<br/>
				• Some collection classes allow us to specify their initial capacity. Thus, if we have an estimation on the number of elements
				that will be stored, we can use it to avoid rehashing or resizing.<br/>
				• Always use Generics for type-safety, readability, and robustness. Also, by using Generics you avoid the ClassCastException
				during runtime.<br/>
				• Use immutable classes provided by the Java Development Kit (JDK) as a key in a Map, in order to avoid the implementation
				of the hashCode and equals methods for our custom class.<br/>
				• Program in terms of interface not implementation.<br/>
				• Return zero-length collections or arrays as opposed to returning a null in case the underlying collection is actually empty.<br/><br/>
				
				<h5>What’s the difference between Enumeration and Iterator interfaces ?</h5><hr/>
				Enumeration is twice as fast as compared to an Iterator and uses very less memory. However, the Iterator is much safer compared
				to Enumeration, because other threads are not able to modify the collection object that is currently traversed by the iterator. Also,
				Iteratorsallow the caller to remove elements from the underlying collection, something which is not possible with Enumerations.<br/><br/>
				
				<h5>What is the difference between HashSet and TreeSet ?</h5><hr/>
				The HashSet is Implemented using a hash table and thus, its elements are not ordered. The add, remove, and contains methods of
				a HashSet have constant time complexity O(1). On the other hand, a TreeSet is implemented using a tree structure. The elements
				in a TreeSet are sorted, and thus, the add, remove, and contains methods have time complexity of O(logn).<br/><br/>
			</p>
			</div>

			<div class= "section">
				<p>
					<a name="Q4"></a><h3>Garbage Collectors</h3><br/>
					<h5>What is the purpose of garbage collection in Java, and when is it used ?</h5><hr/>				
The purpose of garbage collection is to identify and discard those objects that are no longer needed by the application, in order
for the resources to be reclaimed and reused.<br/><br/>

<h5>What does System.gc() and Runtime.gc() methods do ?</h5><hr/>
These methods can be used as a hint to the JVM, in order to start a garbage collection. However, this it is up to the Java Virtual
Machine (JVM) to start the garbage collection immediately or later in time.<br/><br/>

<h5>When is the finalize() called ? What is the purpose of finalization ?</h5><hr/>
The finalize method is called by the garbage collector, just before releasing the object’s memory. It is normally advised to release
resources held by the object inside the finalize method.<br/><br/>

<h5>If an object reference is set to null, will the Garbage Collector immediately free
the memory held by that object ?</h5><hr/>
No, the object will be available for garbage collection in the next cycle of the garbage collector.<br/><br/>

<h5>What is structure of Java Heap ? What is Perm Gen space in Heap ?</h5><hr/>
The JVM has a heap that is the runtime data area from which memory for all class instances and arrays is allocated. It is created
at the JVM start-up. Heap memory for objects is reclaimed by an automatic memory management system which is known as a
garbage collector. Heap memory consists of live and dead objects. Live objects are accessible by the application and will not
be a subject of garbage collection. Dead objects are those which will never be accessible by the application, but have not been
collected by the garbage collector yet. Such objects occupy the heap memory space until they are eventually collected by the
garbage collector.<br/><br/>

<h5>What is the difference between Serial and Throughput Garbage collector ?</h5><hr/>
The throughput garbage collector uses a parallel version of the young generation collector and is meant to be used with applications that have medium to large data sets. On the other hand, the serial collector is usually adequate for most small applications
(those requiring heaps of up to approximately 100MB on modern processors).<br/><br/>

<h5>When does an Object becomes eligible for Garbage collection in Java ?</h5><hr/>
A Java object is subject to garbage collection when it becomes unreachable to the program in which it is currently used.<br/><br/>

<h5>Does Garbage collection occur in permanent generation space in JVM ?</h5><hr/>
Garbage Collection does occur in PermGen space and if PermGen space is full or cross a threshold, it can trigger a full garbage
collection. If you look carefully at the output of the garbage collector, you will find that PermGen space is also garbage collected.
This is the reason why correct sizing of PermGen space is important to avoid frequent full garbage collections. Also check our
article Java 8: PermGen to Metaspace.<br/><br/>
				
				</p>
				</div>

			<div class= "section">
				<p>
					<a name="Q5"></a><h3>Exception Handling</h3><br/>
					<h5>What are the two types of Exceptions in Java ? Which are the differences
						between them ?</h5><hr/>
Java has two types of exceptions: checked exceptions and unchecked exceptions. Unchecked exceptions do not need to be
declared in a method or a constructor’s throws clause, if they can be thrown by the execution of the method or the constructor,
and propagate outside the method or constructor boundary. On the other hand, checked exceptions must be declared in a method
or a constructor’s throws clause. See here for tips on Java exception handling.<br/><br/>

<h5>What is the difference between Exception and Error in java ?</h5><hr/>
Exception and Error classes are both subclasses of the Throwable class. The Exception class is used for exceptional conditions
that a user’s program should catch. The Error class defines exceptions that are not excepted to be caught by the user program.
<br/><br/>
<h5>What is the difference between throw and throws ?</h5><hr/>
The throw keyword is used to explicitly raise a exception within the program. On the contrary, the throws clause is used to
indicate those exceptions that are not handled by a method. Each method must explicitly specify which exceptions does not
handle, so the callers of that method can guard against possible exceptions. Finally, multiple exceptions are separated by a
comma.<br/><br/>

<h5>What is the importance of finally block in exception handling ?</h5><hr/>
A finally block will always be executed, whether or not an exception is actually thrown. Even in the case where the catch
statement is missing and an exception is thrown, the finally block will still be executed. Last thing to mention is that the finally
block is used to release resources like I/O buffers, database connections, etc.<br/><br/>

<h5>What will happen to the Exception object after exception handling ?</h5><hr/>
The Exception object will be garbage collected in the next garbage collection.<br/><br/>

<h5>How does finally block differ from finalize() method ?</h5><hr/>
A finally block will be executed whether or not an exception is thrown and is used to release those resources held by the
application. Finalize is a protected method of the Object class, which is called by the Java Virtual Machine (JVM) just before an
object is garbage collected.<br/><br/>
				
				</p>
            </div>
           </div>
    </div>
    {/*====================================================================================================*/}
              <footer>
                <div class="row footer">
                    <h6>Last Updated: Tuesday, January 12, 2021<br />
                      Centre for Development of Advanced Computing (C-DAC Mumbai)</h6>
                </div>
              </footer>
    </div>
        );
      }
   
   

function Database()
{
    return (<div>
    <div className="row container-fluid">
      <div className="col-2 columnmodific">
          <ol>
            <li><a href="#Q1">MySQL Practice Questions</a></li>
            <li><a href="#Q2">MySQL Interview Questions</a></li>

              <hr/>
              <h5>Follow us on</h5>
            <a href="https://www.cdac.in/index.aspx?id=mumbai">
            <img alt="cdac-mumbai" src={CDACicon} width="10%" height="10%" style={{paddingLeft: '2%'}} />
            </a>
  
            <a href="https://www.facebook.com/cdacmumbai">
              <img alt="cdac-facebook" src={facebookicon} width="10%" height="10%" style={{paddingLeft: '2%'}}/>
              </a>
  
            <a href="https://www.linkedin.com/in/c-dac-mumbai-4b26111ba/">
              <img alt="cdac-linkedin" src={linkedinicon} width="10%" height="10%" style={{paddingLeft: '2%'}}/>						</a>
  
          <hr/>
          </ol>
      </div>




          <div className="col-10" className="add">
          <div class= "section">
<p>
<h3>MySQL Practice Questions</h3><br/>
<h5> 1) What is MySQL? </h5><hr/>
Answer: MySQL is an open-source DBMS which is developed and distributed by Oracle
Corporation.<br/>
It is supported by most of the popular operating systems, such as Windows, Linux, etc. It
can be used to develop different types of applications but it is mainly used for developing
web applications.<br/>
MySQL uses GPL (GNU General Public License) so that anyone can download and
install it for developing those applications which will be published or distributed freely.
But if a user wants to develop any commercial application using MySQL then he/she will
need to buy the commercial version of MySQL.<br/><br/>

<h5> 2) What are the features of MySQL?</h5><hr/>
Answer: MySQL has several useful features that make it a popular database
management software.<br/>
Some important features of MySQL are mentioned below:<br/>
• It is reliable and easy to use too.<br/>
• It is a suitable database software for both large and small applications.<br/>
• Anyone can install and use it at no cost.<br/>
• It is supported by many well-known programming languages, such as
PHP, Java, C++, PERL, etc.<br/>
• It supports standard SQL (Structured Query Language).<br/>
• The open-source license of MySQL is customizable. Hence, a developer
can modify it according to the requirements of the application.<br/><br/>

<h5> 3) What is the default port number of MySQL?</h5><hr/>
Answer: The default port number of MySQL is 3306.<br/><br/>

<h5> 4) How can you find out the version of the installed MySQL? </h5><hr/>
Answer: The version of the installed MySQL server can be found out easily by running
the following command from the MySQL prompt.<br/>
mysql- SHOW VARIABLES LIKE “%version%”;<br/><br/>

<h5> 5) What are the advantages and disadvantages of using MySQL?</h5><hr/>
Answer: There are several advantages of MySQL which are making it a more popular
database system now.<br/>
Some significant advantages and disadvantages of MySQL are mentioned below.<br/>
Advantages:<br/>
• It is well-known for its reliable and secure database management system.
Transactional tasks of the website can be done more securely by using
this software.<br/>
• It supports different types of storage engines to store the data and it works
faster for this feature.<br/>
• It can handle millions of queries with a high-speed transactional process.<br/>
• It supports many advanced level database features, such as multi-level
transactions, data integrity, deadlock identification, etc.<br/>
• Maintenance and debugging processes are easier for this software.
Disadvantages:<br/>
• It is hard to make MySQL scalable.<br/>
• It is not suitable for a very large type of database.<br/>
• The uses of stored routines and triggers are limited to MySQL.<br/>
<br/>
<h5> 6) What is the function of myisamchk?</h5><hr/>
Answer: myisamchk is a useful database utility tool that is used to get information about
MyISAM database tables.<br/>
It is also used for checking, debugging, repairing and optimizing database tables. It is
better to use this command when the server is down or when the required tables are not
in use by the server.<br/>
Syntax:<br/>
myisamchk [OPTION] table_name…<br/>
The available options of this tool can be retrieved by using the following command.<br/>
myisamchk –help<br/>
To check or repair all MyISAM tables, the following command will be required for<br/>
executing from the database directory location.<br/>
myisamchk *.MYI<br/>

<h5> 7) What are the purposes of using ENUM and SET data types?</h5><hr/>
Answer: ENUM data type is used in the MySQL database table to select any one value
from the predefined list.<br/>
The value of a particular field can be restricted by defining the predefined list as the field
which is declared as ENUM will not accept any value outside the list.<br/>
The SET data type is used to select one or more or all values from the predefined list.
This data type can also be used to restrict the field for inserting only the predefined list of
values like ENUM.<br/>
Example:<br/>
Run MySQL server from the command prompt and execute the following SQL
commands to know the use of ENUM and SET data type.
The following SQL commands create a new database named ‘newdb’ and select the
database for use.<br/>
CREATE DATABASE newdb;<br/>
USE newdb;<br/>
The following SQL command will create a table named clients with the fields ENUM and
SET data type.<br/><br/>
CREATE TABLE clients (<br/>
  id INT AUTO_INCREMENT PRIMARY KEY,<br/>
  name VARCHAR(50),<br/>
  membership ENUM('Silver', 'Gold', 'Diamond'),<br/>
  interest SET('Movie', 'Music', 'Concert'));<br/><br/>
INSERT queries will create two records in the table. ENUM field only accepts data from
the defined list.
‘Premium’ value does not exist on the ENUM list. Hence, the value of the ENUM field
will be empty for the second record. SET can accept multiple values and both the data
will be inserted in the second record.<br/><br/>
INSERT INTO clients (name, membership,interest)<br/>
VALUES ('Sehnaz','Gold', 'Music'),<br/>
  ('Sourav','Premium', 'Movie,Concert');<br/>
SELECT * FROM clients;<br/><br/>

<h5>8) What are the differences between a primary key and a foreign key?</h5><hr/>
Answer: The database table uses a primary key to identify each row uniquely. It is
necessary to declare the primary key on those tables that require to create a relationship
among them. One or more fields of a table can be declared as the primary key.
When the primary key of any table is used in another table as the primary key or another
field for making a database relation, then it is called a foreign key.<br/>
The differences between these two keys are mentioned below:<br/>
• The primary key uniquely identifies a record, whereas foreign key refers to
the primary key of another table.<br/>
• The primary key can never accept a NULL value but foreign key accepts a
NULL value.<br/>
• When a record is inserted in a table that contains the primary key then it is
not necessary to insert the value on the table that contains this primary
key field as the foreign key.<br/>
• When a record is deleted from the table that contains the primary key then
the corresponding record must be deleted from the table containing the
foreign key for data consistency. But any record can be deleted from the
table that contains a foreign key without deleting a related record of
another table.<br/>
Example:<br/>
Two tables named manufacturers and items will be created after executing the
following two SQL commands.
Here, the primary key of the manufacturer’s table is used as a foreign key in
the items table with the field name manufacturer_id. Hence, the manufacturer_id field
will contain only those values that exist in the manufacturer’s table.<br/><br/>
CREATE TABLE manufacturers (<br/>
  id INT AUTO_INCREMENT PRIMARY KEY,<br/>
  name VARCHAR(50));<br/>
CREATE TABLE items (<br/>
  id INT AUTO_INCREMENT PRIMARY KEY,<br/>
  name VARCHAR(50),<br/>
  type VARCHAR(50),<br/>
  brand VARCHAR(50),<br/>
  manufacturer_id INT,<br/>
  FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id));<br/><br/>
  
  <h5> 9) What are the differences between CHAR and VARCHAR data types?</h5><hr/>
Answer: Both CHAR and VARCHAR data types are used to store string data in the field
of the table.<br/>
The differences between these data types are mentioned below:<br/>
• CHAR data type is used to store fixed-length string data and the
VARCHAR data type is used to store variable-length string data.<br/>
• The storage size of the CHAR data type will always be the maximum
length of this data type and the storage size of VARCHAR will be the
length of the inserted string data. Hence, it is better to use the CHAR data
type when the length of the string will be the same length for all the
records.<br/>
• CHAR is used to store small data whereas VARCHAR is used to store
large data.<br/>
• CHAR works faster and VARCHAR works slower.
Further Reading = MySQL Data Types<br/>
Example:<br/>
The following SQL statement will create a table named Customers. In this table, the data
type of name field is VARCHAR and the data type of phone field is CHAR.
The size of the name field will depend on the length of the inserted value. The size of
the phone field will always be 14 characters even if the length of the inserted value is
less than 14 characters.<br/><br/>
CREATE TABLE customers (<br/>
  id INT AUTO_INCREMENT PRIMARY KEY,<br/>
  name VARCHAR(50),<br/>
  phone CHAR(14))<br/><br/>

  <h5> 10) What is the purpose of using the TIMESTAMP data type?</h5><hr/>
Answer: A TIMESTAMP data type is used to store the combination of date and time
value which is 19 characters long.<br/>
The format of TIMESTAMP is YYYY-MM-DD HH:MM: SS. It can store data from ‘1970-
01-01 00:00:01’ UTC to ‘2038-01-19 03:14:07’ UTC. By default, the current date and
time of the server get inserted in the field of this data type when a new record is inserted
or updated.<br/><br/>

<h5> 11) What is the difference between mysql_fetch_array() and ysql_fetch_object()
?</h5><hr/>
Answer: Both mysql_fetch_array() and mysql_fetch_object() are built-in methods of
PHP to retrieve records from MySQL database table.
The difference between these methods is that mysql_fetch_array() returns the result set
as an array and mysql_fetch_object() returns the result set as an object.<br/>
Example:<br/><br/>
$result = mysql_query("SELECT id, name FROM clients");<br/>
using mysql_fetch_array()
while ($row = mysql_fetch_array($result, MYSQL_NUM)) <br/>

  printf("ID: %s Name: %s", $row[0], $row[1]);<br/>

using mysql_fetch_object()<br/>
while ($row = mysql_fetch_object($result)) <br/>
  printf("ID: %s Name: %s", $row-&amp;gt;id, $row-&amp;gt;name);<br/>

<br/><br/>
<h5>12) How can you filter the duplicate data while retrieving records from the
table?</h5><hr/>
Answer: A DISTINCT keyword is used to filter the duplicate data from the table while
retrieving the records from a table.<br/>
Example:<br/>
The following SQL command shows all the records of the items table. The output shows
that the table contains duplicate values in the Type field.<br/>
SELECT * from items;<br/>
The following SQL command will display the values of the type field by removing
duplicate values.<br/>
SELECT DISTINCT type from items;<br/><br/>

<h5> 13) What is the difference between NOW() and CURRENT_DATE()?</h5><hr/>
Answer: Both NOW() and CURRENT_DATE() are built-in MySQL methods. NOW() is
used to show the current date and time of the server and CURRENT_DATE() is used to
show only the date of the server.<br/>
SELECT now();<br/>
SELECT current_date();<br/><br/>

<h5> 14) Which statement is used in a select query for partial matching?</h5><hr/>
Answer: REGEXP and LIKE statements can be used in a SELECT query for partial
matching. REGEXP is used to search records based on the pattern and LIKE is used to
search any record by matching any string at the beginning or end or middle of a
particular field value.<br/>
Example:<br/>
First, check the existing records of the ‘clients’ table by executing the SELECT query.<br/>
SELECT * FROM clients;<br/>
Run SELECT query with REGEXP clause to search those records from
the clients where the client name starts with ‘S’<br/>
SELECT * FROM clients WHERE name REGEXP "^S";<br/>
Run SELECT query with LIKE clause to search those records from the clients where the
client name starts with ‘A’<br/>
SELECT * FROM clients WHERE name LIKE "A%";<br/><br/>

<h5> 15) Which MySQL function is used to concatenate string?</h5><hr/>
Answer: CONCAT() function is used to combine two or more string data. The use of this
function is here with an example.<br/>
Example:<br/>
The following SELECT query with CONCAT() function will combine five words,
‘Welcome ‘, ‘to’, ‘SoftwareTestingHelp’,’.’ and ‘com’.<br/>
SELECT CONCAT('Welcome ',to ','SoftwareTestingHelp','.',com');<br/>
CONCAT() function can be used on any table as well. The following SELECT query will
show the output by combining two fields, brand and type of items table.<br/>
SELECT CONCAT(brand,'=',type) from items;<br/><br/>

<h5> 16) How can you change the name of any existing table by using the SQL
statement?</h5><hr/>
Answer: The following SQL command is used to rename an existing table of the
database.<br/>
RENAME TABLE table_name TO new_name<br/>
Example:<br/>
The following command will show the table list of the newdb database.<br/>
SHOW TABLES;<br/>
The following rename command will rename the table items by new name products.<br/>
RENAME TABLE items TO products;<br/>
SHOW TABLES;<br/><br/>

<h5> 17) How can you retrieve a portion of any column value by using a SELECT
query?</h5><hr/>
Answer: SUBSTR() function is used to retrieve the portion of any column. The use of
this function is explained here with an example.<br/>
Example:<br/>
Here, the first SELECT command is used to show all the records of the Products table
and the second SELECT command is executed using SUBSTR function and that prints
only the first five characters of the name field.<br/>
SELECT * FROM products;<br/>
SELECT SUBSTR(name,1,5) FROM products;<br/><br/>

<h5> 18) What is the purpose of using a HEAP table?</h5><hr/>
Answer: The table which uses a hashed index and stores in the memory is called the
HEAP table. It works as a temporary table and it uses the indexes that make it faster
than another table type.<br/>
When MySQL crashes for any reason then all the data stored in this table can be lost. It
uses fixed-length data types. Hence BLOB and TEXT data types are not supported by
this table. It is a useful table for those MySQL tasks where speed is the most important
factor and temporary data is used.<br/><br/>

<h5> 19) How can you add and remove any column of a table?</h5><hr/>
Answer: The syntax for adding any column in an existing table is shown below.<br/>
ALTER TABLE table_name ADD COLUMN column_name column_definition [FIRST|AFTER existing_column]<br/>
Example:<br/>
DESCRIBE command is used to show the structure of the products table.<br/>
DESCRIBE products;<br/>
The following ALTER command with ADD COLUMN clause will add a new field named
‘price’ in the table products.<br/>
ALTER TABLE products ADD COLUMN price DECIMAL(5,2);<br/>
DESCRIBE products;<br/>
The syntax for removing any column from an existing table is shown below.<br/>
ALTER TABLE table_name DROP COLUMN column_name;<br/>
Example:<br/>
The following ALTER command with a DROP COLUMN clause will remove the field
named ‘brand’ in the table ‘products’.<br/>
ALTER TABLE products DROP COLUMN brand;<br/>
DESCRIBE products;<br/><br/>

<h5>20) What is an index? How can an index be declared in MySQL?</h5><hr/>
Answer: An index is a data structure of a MySQL table that is used to speed up the
queries.<br/>
It is used by the database search engine to find out the records faster. One or more
fields of a table can be used as an index key. Index key can be assigned at the time of
table declaration or can be assigned after creating the table.<br/>
Example:<br/>
username and email fields are set as the index in the following create table statement.<br/><br/>
CREATE TABLE users(<br/>
  username VARCHAR(50) PRIMARY KEY,<br/>
  email VARCHAR(50) NOT NULL,<br/>
  password VARCHAR(50) NOT NULL,<br/>
  INDEX (username, email));<br/><br/>
The following command will show the index key information of the ‘users’ table.<br/>
SHOW INDEXES FROM users;<br/><br/>

<h5>21) What is meant by a decimal (5,2)?</h5><hr/>
Answer: A decimal data type is used in MySQL to store the fractional data.
The meaning of decimal (5,2) means that the total length of the fractional value is 5. The
field can contain 3 digits before the decimal point and 2 digits after the decimal point. If a
user adds any value larger than the defined length then it will insert 999.99 in the field.
The use of this data type is explained in the following example.<br/>
Example:<br/>
In the following insert query, 789.56 is inserted in the price field. This value is less than
1000 and the total digits with the fractional part are 5. So, this value is valid for this field.<br/><br/>
INSERT INTO products (type, name, price, manufacturer_id)<br/>
VALUES ('Mobile', 'iPhone 8', 789.56, 1);<br/>
SELECT * FROM products;<br/>
In the following insert query, 34789.567 is set for the price field. Then this value is
greater than 1000 and the total digits with fractional parts are 8. So, the default value
999.99 is inserted in the place of 34789.567.<br/>
INSERT INTO products (type, name, price, manufacturer_id)<br/>
VALUES('TV','Sony 32" Smart TV',34789.567, 2);<br/>
SELECT * FROM products;<br/><br/>

<h5>22) What is the view? How can you create and drop view in MySQL?</h5><hr/>
Answer: A view works as a virtual table that is used to store query and returns a result
set when it is called. An updatable view is also supported by MySQL.
How a view can be created or deleted in MySQL are shown in the following examples.<br/>
Create View Example:<br/>
The following statement will create a view file named ‘client_list’ based on the
table clients.<br/>
CREATE VIEW `client_list` AS SELECT `name` as 'Name', `membership` as 'Membership' FROM `clients`;<br/>
SELECT statement will display the records of client_list value.<br/>
SELECT * FROM client_list;<br/>
DROP View Example:<br/>
The drop view statement will delete the view file. The SELECT query will show an error
after deleting the view.<br/>
DROP VIEW client_list;<br/>
SELECT * FROM client_list;<br/><br/>

<h5>23) What is the function of mysqldump?</h5><hr/>
Answer: mysqldump is a useful utility tool of MySQL that is used to dump one or more
or all databases from the server for backup or transfer to another database server.<br/>
Syntax:<br/><br/>
For a single database,<br/>
mysqldump [OPTIONS] db_name [TABLES]<br/>
For multiple databases,<br/>
mysqldump [OPTIONS] –databases DB1 [DB2 DB3…]<br/>
For all databases,<br/>
mysqldump [OPTIONS] –all-databases<br/><br/>
Example:<br/>
The following command will create a dump of the ‘newdb’ database and export the
content of the database in the file, newdb.sql.<br/>
mysqldump --databases newdb - newdb.sql<br/><br/>

<h5>24) How can you change the password of a MySQL user?</h5><hr/>
Answer: SET PASSWORD statement is used to change the password of a MySQL
user.<br/><br/>
Syntax:<br/>
SET PASSWORD FOR ‘username’@’hostname’ = PASSWORD(‘password’);<br/>
Example:<br/><br/>
The following statement will set or change the root password.<br/>
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123456');<br/><br/>

<h5>25) What is the difference between UNIX TIMESTAMP and MySQL
TIMESTAMP?</h5><hr/>
Answer: Both UNIX TIMESTAMP and MySQL TIMESTAMP are used to represent the
date and time value. The main difference between these values is that UNIX
TIMESTAMP represents the value by using 32-bits integers and MySQL TIMESTAMP
represents the value in the human-readable format.<br/><br/>
Example:<br/>
A UNIX time value is used by FROM_UNIXTIME function in the SELECT query to get
the date and time value in the human-readable format.<br/>
SELECT FROM_UNIXTIME (1596222320) AS 'MySQLTIMESTAMP';<br/>
Date and time value is used by UNIX_TIMESTAMP function in the SELECT query to get
the date and time value in the UNIX format.<br/>
SELECT UNIX_TIMESTAMP ('2018-12-25 09:45:40') AS 'UNIXTIMESTAMP';<br/><br/>

<h5>26) How can you import tables from a SQL file into a database by using the
MySQL client?</h5><hr/>
Answer: Database tables can be imported into a database from a SQL file by using the
following MySQL statement.<br/>
mysql -u username -p database_name leftarrow sql_filename <br/> <br/>
Example:<br/>
If the root user’s password is empty, then the following command will import tables from
‘newdb.sql’ file into the database `mydb`.<br/>
mysql -u root mydb leftarrow newdb.sql<br/><br/>

<h5>27) What is the difference between the Primary key and the Unique key?</h5><hr/>
Answer: Unique data is stored in the primary key and unique key fields. The primary key
field never accepts NULL value but a unique key field accepts a NULL value.<br/><br/>
Example:<br/>
In the users’ table, the id field is the primary key and the email field is a unique key.
Two records are inserted in the table where the email field is NULL for the 2nd record.
The records are inserted properly as the unique field supports a NULL value.<br/><br/>
INSERT INTO users (username, email, password)<br/>
VALUES('admin', 'admin@example.com', '7890'),<br/>
  ('staff', 'NULL', '1234');<br/>
SELECT * FROM users;<br/><br/>

<h5>28) What is the purpose of using the IFNULL() function?</h5><hr/>
Answer: IFNULL() function takes two arguments. It returns the first argument value if
the value of the first argument is not NULL and it returns the second argument if the
value of the first argument is NULL.<br/><br/>
Example:<br/>
Here, the first argument of the IFNULL function is not NULL. So, the output is the first
argument value.<br/>
SELECT IFNULL ("Tutorial", "fahmidasclassroom.com");<br/>
Here, the first argument of the IFNULL function is NULL. So, the output is NULL.<br/>
SELECT IFNULL ("NULL", "fahmidasclassroom.com");<br/><br/>

<h5>29) What is a join? Explain the different types of MySQL joins.</h5><hr/>
Answer: The SQL statement that is used to make a connection between two or more
tables based on the matching columns is called a join. It is mainly used for complex
queries.<br/><br/>
Different types of SQL joins are mentioned below:<br/>
• Inner Join: It is a default join. It returns records when the values match in
the joining tables.<br/>
• Left Outer Join: It returns all the records from the left table based on the
matched records from the right table.<br/>
• Right Outer Join: It returns all the records from the right table based on
the matched records from the left table.<br/>
• Full Outer Join: It returns all the records that match from the left or right
table.<br/><br/>
Example:<br/>
Two tables, manufacturers and products are used in this example to show the use of
INNER JOIN. Here, SELECT queries are used to show the current records of these two
tables.<br/>
SELECT * FROM manufacturers;<br/>
SELECT * FROM products;<br/>
INNER JOIN is used in the following SELECT query where all the id and name of the
products table will be displayed based on matching manufacturer_id of
the products with an id of the manufacturer’s table.<br/>
SELECT products.id, products.name<br/>
FROM products<br/>
INNER JOIN manufacturers ON manufacturers.id= products.manufacturer_id;<br/><br/>

<h5>30) How can you retrieve a particular number of records from a table?</h5><hr/>
Answer: LIMIT clause is used with the SQL statement to retrieve a particular number of
records from a table. From which record and how many records will be retrieved are
defined by the LIMIT clause.<br/><br/>
Syntax:<br/>
LIMIT starting_number, number_of_rows<br/><br/>
Example:<br/>
Products table has 5 records which are displayed by the first SELECT query and the
second SELECT query is used to display the records from 2nd to 3rd by using LIMIT 1, 2.<br/><br/>
SELECT * FROM products;<br/>
SELECT * FROM products LIMIT 1, 2;
<br/><br/>
<h5>31) How can you export the table as an XML file in MySQL? </h5><br/>
Answer: ‘-X’ option is used with `mysql` command for exporting the file as XML. The
following statement will export any table from a database as an XML file.<br/>
mysql -u username -X -e “SELECT query” database_name<br/><br/>
Example:<br/>
The following command will export the data of the items table into an xmlData.xml file.<br/>
mysql -u root -X -e "SELECT * from products" newdb rightarrow xmlData.xml<br/><br/>

<h5>32) What is a CSV table?</h5><hr/>
Answer: MySQL table that uses the CSV storage engine is called a CSV table. Data are
stored as comma-separated values in the CSV table. MySQL server creates a data file
with an extension ‘.csv’ to store the content of the CSV table.<br/><br/>
Example:<br/>
The following create statement will create a CSV file named book.<br/>
CREATE TABLE book ( id INT NOT NULL) ENGINE=CSV;<br/><br/>

<h5>33) How can you calculate the sum of any column of a table?</h5><hr/>
Answer: SUM() function is used to calculate the sum of any column.<br/><br/>
Syntax:<br/>
SUM(DISTINCT expression)<br/><br/>
Example:<br/>
Products table has a numeric field named, price. In this example, the SUM() function is
used to calculate the total value of the price field.<br/>
SELECT * FROM products;<br/>
SELECT SUM(price) as total FROM products;<br/><br/>

<h5>34) How can you count the total number of records of any table?</h5><hr/>
Answer: COUNT() function is used to count the total number of records of any table.<br/>
Syntax:<br/>
COUNT(expression)<br/>
Example:<br/>
The following SELECT query is used to count the total number of records of
the products table.<br/>
SELECT COUNT(*) as `Total Records` FROM products;
<br/><br/>
<h5>35) Explain the difference between DELETE and TRUNCATE.</h5><hr/>
Answer: Both DELETE and TRUNCATE commands are used to delete the records from
any database table. However, there are some significant differences between these
commands. If the table contains the AUTO_INCREMENT PRIMARY KEY field then the
effect of these commands can be shown properly.<br/>
Two differences between these commands are mentioned below.<br/><br/>
1. DELETE command is used to delete a single or multiple or all the records
from the table. The TRUNCATE command is used to delete all the records
from the table or make the table empty.<br/>
2. When DELETE command is used to delete all the records from the table
then it doesn’t re-initialize the table. So, the AUTO_INCREMENT field
does not count from one when the user inserts any record.
But when all the records of any table are deleted by using TRUNCATE command then it
re-initializes the table and a new record will start from one for the AUTO_INCREMENT
field.<br/><br/>
Example:<br/>
The previously created user table is used in this example.
First, the SELECT query will show all the records of the user’s table. DELETE query will
delete all the records from the user’s table. INSERT query will insert a new record into
the user’s table. After insert, if the SELECT query executes again then it will be shown
that a new id is calculated after the deleted id.<br/><br/>
SELECT * FROM users;<br/>
DELETE FROM users;<br/>
INSERT INTO users (username, email)<br/>
VALUES ('Durjoy', 'durjoy@gmail.com');<br/>
SELECT * FROM users;<br/><br/>
Currently, there are two records in the user’s table and when a new record is inserted
after deleting all the records then the new id is 3, and not 1.
The same queries are executed in this part, just used the TRUNCATE statement in
place of DELETE. It is shown that the id value of the new record is 1.<br/><br/>
TRUNCATE table users;<br/>
INSERT INTO users (username, email)<br/>
VALUES ('Farheen', 'farheen@gmail.com');<br/>
SELECT * FROM users;<br/><br/>

<h5>36) What is a storage engine? What are the differences between InnoDB and
MyISAM engines?</h5><hr/>
Answer: One of the major components of the MySQL server is the storage engine for
doing different types of database operations. Each database table created is based on
the specific storage engine.
MySQL supports two types of storage engines i.e transactional and nontransactional. InnoDB is the default storage engine of MySQL which is transactional.
MyISAM storage engine is a non-transactional storage engine.
The differences between InnoDB and MyISAM storage engines are discussed
below:<br/><br/>
• MyISAM supports the FULLTEXT index but InnoDB doesn’t support the
FULLTEXT index.<br/>
• MyISAM is faster and InnoDB is slower.<br/>
• InnoDB supports ACID (Atomicity, Consistency, Isolation, and Durability)
property but MyISAM doesn’t.<br/>
• InnoDB supports row-level locking and MyISAM supports table-level
locking.<br/>
• InnoDB is suitable for large database and MyISAM is suitable for a small
database.<br/><br/>

<h5>37) What is a transaction? Describe MySQL transaction properties.</h5><hr/>
Answer: When a group of database operations is done as a single unit then it is called a
transaction. If any task of the transactional tasks remains incomplete then the
transaction will not succeed. Hence, it is mandatory to complete all the tasks of a
transaction to make the transaction successful.
A transaction has four properties which are known as ACID property. These properties
are described below.<br/><br/>
• Atomicity: It ensures that all the tasks of a transaction will be completed
successfully otherwise all the completed tasks will be rolled back to the
previous state for any failure.<br/>
• Consistency: It ensures that the database state must be changed
accurately for the committed transaction.<br/>
• Isolation: It ensures that all the tasks of a transaction will be done
independently and transparently.<br/>
• Durability: It ensures that all the committed transaction is consistent for
any type of system failure.<br/><br/>

<h5>38) What are the functions of commit and rollback statements?</h5><hr/>
Answer: Commit is a transaction command that executes when all the tasks of a
transaction are completed successfully. It will modify the database permanently to
confirm the transaction.<br/>
Syntax:<br/>
COMMIT;<br/>
Rollback is another transactional command that executes when any of the transactional
tasks become unsuccessful and undoes all the changes that are made by any
transactional task to make the transaction unsuccessful.<br/>
Syntax:<br/>
ROLLBACK;<br/><br/>

<h5>39) What is the difference between MyISAM Static and MyISAM Dynamic?</h5><hr/>
Answer: MyISAM Static and MyISAM dynamic are the variations of the MyISAM storage
engine. The differences between these tables are mentioned below.<br/>
• All the fields of MyISAM static table are of a fixed length and MyISAM
dynamic table accepts variable length fields such as BLOB, TEXT, etc.<br/>
• After data corruption, it is easier to restore the MyISAM static table than
MyISAM dynamic table.<br/><br/>

<h5>40) What is a trigger? How you can create a trigger in MySQL?</h5><hr/>
Answer: One of the important features of the MySQL database is a trigger that executes
automatically when a particular database event occurs.
It fires after or before the execution of an insert or update or deletes a statement. It is a
very useful option when a database user wants to do some database operations
automatically.<br/><br/>
Trigger Example:<br/>
If you want to delete the items of a supplier from the items table automatically after
deleting the entry of the particular supplier from the ‘suppliers’ table then write the
trigger in the following way.<br/><br/>
Example:<br/>
This is an example of after delete trigger that will fire automatically when any record is
removed from the manufacturer table and deletes all the records from
the products table where the deleted id of the manufacturer table matches with
the manufacturer_id field of the products table.<br/><br/>
DELIMITER //<br/>
CREATE TRIGGER manufacturer_after_delete<br/>
AFTER DELETE<br/>
ON manufacturers FOR EACH ROW<br/>
BEGIN<br/>
DELETE FROM products WHERE products.manufacturers_id = OLD.id;<br/>
END;
<br/><br/>

</p>
                </div>

                <div class= "section">
                    <p>
                        <a name="Q2"></a><h3 style={{color: 'teal'}}>MySQL Interview Questions</h3><hr/>
                      <h6>Q1.how to do login in mysql with unix shell</h6>
                        Answers
                        :
                        By below method if password is pass and user name is root<br/>
                        # [mysql dir]/bin/mysql -h hostname -u root -p pass<br/>
                        <hr/>    <h6>Q2.how you will Create a database on the mysql server with unix shell</h6>
                        Answers :
                        
                        mysql create database databasename;<br/>
                        <hr/>    <h6>Q3.how to list or view all databases from the mysql server.</h6>
                        Answers :
                      
                        mysql show databases;<br/>
                        <hr/>    <h6>Q4.How Switch (select or use) to a database.</h6>
                        Answers :
                      
                        mysql use databasename;<br/>
                        <hr/>    <h6> Q5.How To see all the tables from a database of mysql server.</h6>
                        Answers :
                        
                        mysql show tables;<br/>
                        <hr/>    <h6>Q6.How to see table's field formats or description of table .</h6>
                        Answers :
                        
                        mysql describe tablename;<br/>
                        <hr/>    <h6> Q7.How to delete a database from mysql server.</h6>
                        Answers :
                  
                        mysql drop database databasename;<br/>
                        <hr/>    <h6>Q8.How we get Sum of column</h6>
                        Answers :
                        
                        mysql SELECT SUM(*) FROM [table name]; <br/>
                        <hr/>    <h6> Q9.How to delete a table</h6>
                        Answers :
                        
                        mysql drop table tablename;<br/>
                        <hr/>    <h6> Q10.How you will Show all data from a table.</h6>
                        Answers :
                        mysql SELECT * FROM tablename;<br/>
                        <hr/>    <h6>
                        Q11.How to returns the columns and column information pertaining to the
                        designated table</h6>
                        Answers :
                          mysql show columns from tablename;<br/>
                          <hr/>    <h6>Q12.How to Show certain selected rows with the value "pcds"</h6>
                        Answers :
                          mysql SELECT * FROM tablename WHERE fieldname = "pcds";<br/>
                          <hr/>     <h6>
                        Q13.How will Show all records containing the name "sonia" AND the phone
                        number ' 9876543210'</h6>
                        Answers :
                    
                        mysql SELECT * FROM tablename WHERE name = "sonia" AND phone_number = '
                        9876543210';<br/>
                        <hr/>    <h6>
                        Q14.How you will Show all records not containing the name "sonia" AND the
                        phone number ' 9876543210' order by the phone_number field.</h6>
                        Answer :
                        
                        mysql SELECT * FROM tablename WHERE name != "sonia" AND phone_number = '
                        9876543210' order by phone_number;<br/>
                        <hr/>    <h6>
                        Q15.How to Show all records starting with the letters 'sonia' AND the phone
                        number ' 9876543210'</h6>
                        Answers :
                        
                        mysql SELECT * FROM tablename WHERE name like "sonia%" AND phone_number
                        = ' 9876543210';<br/>
                        <hr/>    <h6>
                        Q16.How to show all records starting with the letters 'sonia' AND the phone
                        number ' 9876543210' limit to records 1 through 5.</h6>
                        Answers :
                        
                        mysql SELECT * FROM tablename WHERE name like "sonia%" AND phone_number
                        = ' 9876543210' limit 1,5; <br/>
                      
                      
                        <hr/>    <h6>Q17.How you will Show unique records.</h6>
                        Answer :
                          mysql SELECT DISTINCT columnname FROM tablename;<br/>
                          <hr/>     <h6>
                        Q18.how we will Show selected records sorted in an ascending (asc) or
                        descending (desc)</h6>
                        Answer :
                      
                        mysql SELECT col1,col2 FROM tablename ORDER BY col2 DESC;
                        mysql SELECT col1,col2 FROM tablename ORDER BY col2 ASC;<br/>
                        <hr/>    <h6>Q19.how to Return total number of rows.</h6>
                        Answers :
                          mysql SELECT COUNT(*) FROM tablename;<br/>
                          <hr/>    <h6> Q20.How to Join tables on common columns.</h6>
                        Answer :
                        
                        mysql select lookup.illustrationid, lookup.personid,person.birthday from lookup left
                        join person on lookup.personid=person.personid=statement to join birthday in person
                        table with primary illustration id<br/>
                        <hr/>    <h6>
                        Q21.How to Creating a new user. Login as root. Switch to the MySQL db. Make the
                        user. Update privs.</h6>
                        Answer :
                    
                        # mysql -u root -p<br/>
                        mysql use mysql;<br/>
                        mysql INSERT INTO user (Host,User,Password)<br/>
                        VALUES('%','username',PASSWORD('password'));<br/>
                        mysql flush privileges;<br/>
                        <hr/>    <h6>Q22.How to Change a users password from unix shell.</h6>
                        Answers :
                        
                        # [mysql dir]/bin/mysqladmin -u username -h hostname.blah.org -p password 'newpassword'<br/>
                        <hr/>    <h6>
                        Q23.How to Change a users password from MySQL prompt. Login as root. Set the
                        password. Update privs.</h6>
                        Answer :
                      
                        # mysql -u root -p<br/>
                        mysql SET PASSWORD FOR 'user'@'hostname' = PASSWORD('passwordhere');<br/>
                        mysql flush privileges;<br/>
                        <hr/>     <h6>Q24.How to Recover a MySQL root password. Stop the MySQL server process.
                        
                        Start again with no grant tables. Login to MySQL as root. Set new password.
                        Exit MySQL and restart MySQL server.</h6>
                        Answer :
                        # /etc/init.d/mysql stop<br/>
                        # mysqld_safe --skip-grant-tables &<br/>
                        # mysql -u root<br/>
                        mysql use mysql;<br/>
                        mysql update user set password=PASSWORD("newrootpassword") where
                        User='root';<br/>
                        mysql flush privileges;<br/>
                        mysql quit
                        # /etc/init.d/mysql stop
                        # /etc/init.d/mysql start<br/>
                        <hr/>    <h6>Q25.How to Set a root password if there is on root password.</h6>
                        Answer :
                        # mysqladmin -u root password newpassword<br/>
                        <hr/>    <h6>Q26.How to Update a root password.</h6>
                        Answer :
                        # mysqladmin -u root -p oldpassword newpassword<br/>
                        <hr/>    <h6>
                        Q27.How to allow the user "sonia" to connect to the server from localhost using
                        the password "passwd". Login as root. Switch to the MySQL db. Give privs.
                        Update privs.</h6>
                        Answers :
                        
                        # mysql -u root -p<br/>
                        mysql use mysql;<br/>
                        mysql grant usage on *.* to sonia@localhost identified by 'passwd';<br/>
                        mysql flush privileges;<br/>
                        <hr/>    <h6>
                        Q28.How to give user privilages for a db. Login as root. Switch to the MySQL db.
                        Grant privs. Update privs.</h6>
                        Answers :
                        
                        # mysql -u root -p<br/>
                        mysql use mysql;<br/>
                        mysql INSERT INTO user<br/>
                        (Host,Db,User,Select_priv,Insert_priv,Update_priv,Delete_priv,Create_priv,Drop_priv)<br/>
                        VALUES ('%','databasename','username','Y','Y','Y','Y','Y','N');<br/>
                        mysql flush privileges;<br/>
                        or<br/>
                        mysql grant all privileges on databasename.* to username@localhost;<br/>
                        mysql flush privileges;<br/>
                        <hr/>    <h6> Q29.How To update info already in a table and Delete a row(s) from a table.</h6>
                        Answer :
                        
                        mysql UPDATE [table name] SET Select_priv = 'Y',Insert_priv = 'Y',Update_priv =
                        'Y' where [field name] = 'user';<br/>
                        mysql DELETE from [table name] where [field name] = 'whatever';<br/>
                        <hr/>    <h6>Q30.How to Update database permissions/privilages.</h6>
                        Answer :
                          mysql flush privileges; <br/>
                        
                          <hr/>         <h6>Q31.How to Delete a column and Add a new column to database</h6>
                        Answer :
                        
                        mysql alter table [table name] drop column [column name];<br/>
                        mysql alter table [table name] add column [new column name] varchar (20);<br/>
                        <hr/>    <h6> Q32.Change column name and Make a unique column so we get no dupes.</h6>
                        Answer :
                        
                        mysql alter table [table name] change [old column name] [new column name]
                        varchar (50);<br/>
                        mysql alter table [table name] add unique ([column name]);<br/>
                        <hr/>    <h6> Q33.How to make a column bigger and Delete unique from table.</h6>
                        Answer :
                        
                        mysql alter table [table name] modify [column name] VARCHAR(3);
                        mysql alter table [table name] drop index [colmn name];<br/>
                        <hr/>    <h6> Q34.How to Load a CSV file into a table</h6>
                        Answer :
                        
                        mysql LOAD DATA INFILE '/tmp/filename.csv' replace INTO TABLE [table name]
                        FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' (field1,field2,field3);<br/>
                        <hr/>    <h6>
                        Q35.How to dump all databases for backup. Backup file is sql commands to
                        recreate all db's.</h6><br/>
                        Answer :
                        # [mysql dir]/bin/mysqldump -u root -ppassword --opt rightarrow/tmp/alldatabases.sql<br/>
                        <hr/>    <h6> Q36.How to dump one database for backup.</h6>
                        Answer :
                        
                        # [mysql dir]/bin/mysqldump -u username -ppassword --databases databasename
                        rightarrow/tmp/databasename.sql<br/>
                        <hr/>    <h6>Q37.How to dump a table from a database.</h6>
                        Answer :
                        
                        # [mysql dir]/bin/mysqldump -c -u username -ppassword databasename tablename
                        rightarrow /tmp/databasename.tablename.sql<br/>
                        <hr/>    <h6>Q38.QRestore database (or database table) from backup.</h6>
                        Answer :
                        
                        # [mysql dir]/bin/mysql -u username -ppassword databasename leftarrow
                        /tmp/databasename.sql<br/>
                        <hr/>    <h6> Q39.How to Create Table show Example</h6>
                        Answer :
                        
                        mysql CREATE TABLE [table name] (firstname VARCHAR(20), middleinitial<br/>
                        VARCHAR(3), lastname VARCHAR(35),suffix VARCHAR(3),officeid<br/>
                        VARCHAR(10),userid VARCHAR(15),username VARCHAR(8),email<br/>
                        VARCHAR(35),phone VARCHAR(25), groups VARCHAR(15),datestamp<br/>
                        DATE,timestamp time,pgpemail VARCHAR(255));<br/>
                        <hr/>    <h6>
                        Q40.SHow to search second maximum(second highest) salary value(integer)from
                        table employee (field salary)in the manner so that mysql gets less load?</h6>

                        Answers : By below query we will get second maximum(second highest) salary 
                          value(integer)from table employee (field salary)in the manner so that mysql gets less
                        load?<br/>
                        SELECT DISTINCT(salary) FROM employee order by salary desc limit 1 , 1 ;
                        (This way we will able to find out 3rd highest , 4th highest salary so on just need to
                        change limit condtion like LIMIT 2,1 for 3rd highest and LIMIT 3,1 for 4th
                        some one may finding this way useing below query that taken more time as compare
                        to above query SELECT salary FROM employee where salary leftarrow (select max(salary)
                        from employe) order by salary DESC limit 1 ;<br/><br/>
                    </p>
            </div>
            </div>
    </div>

              <footer>
                <div class="row footer">
                    <h6>Last Updated: Tuesday, January 12, 2021<br />
                      Centre for Development of Advanced Computing (C-DAC Mumbai)</h6>
                </div>
              </footer>
    </div>
        );
      }


function WebTechnology()
{
  return (<div>
    <div className="row container-fluid">
      <div className="col-2 columnmodific">
          <ol>
                        <li><a href="#Q1">HTML</a></li>
                        <li><a href="#Q2">CSS</a></li>
                        <li><a href="#Q3">NODE JS</a></li>
              <hr/>
              <h5>Follow us on</h5>
            <a href="https://www.cdac.in/index.aspx?id=mumbai">
            <img alt="cdac-mumbai" src={CDACicon} width="10%" height="10%" style={{paddingLeft: '2%'}} />
            </a>
  
            <a href="https://www.facebook.com/cdacmumbai">
              <img alt="cdac-facebook" src={facebookicon} width="10%" height="10%" style={{paddingLeft: '2%'}}/>
              </a>
  
            <a href="https://www.linkedin.com/in/c-dac-mumbai-4b26111ba/">
              <img alt="cdac-linkedin" src={linkedinicon} width="10%" height="10%" style={{paddingLeft: '2%'}}/>						</a>
  
          <hr/>
          </ol>
      </div>
   




          <div className="col-10" className="add">
          <div class= "section">
          <p>
                        <h3>HTML</h3>
                        <hr/>
                        <h6>1) What is HTML?</h6>
HTML is short for HyperText Markup Language and is the language of the World Wide Web. It
is the standard text formatting language used for creating and displaying pages on the Web.
HTML documents are made up of two things: the content and the tags that format it for proper
display on pages.
<hr/><h6>2) What are tags?</h6>
Content is placed in between HTML tags in order to properly format it. It makes use of the less
than symbol (). A slash symbol is also used as a closing tag. For example:
[crayon-5f2d9a964512c217400387/]
<hr/><h6>3) Do all HTML tags come in a pair?</h6>
No, there are single HTML tags that do not need a closing tag. Examples are the
tag and
  tags.
  <hr/><h6>4) What are some of the common lists that can be used when designing a page?</h6>
You can insert any or a combination of the following list types:<br/>
- ordered list<br/>
- unordered list<br/>
- definition list<br/>
- menu list<br/>
- directory list<br/>
  
Each of this list types makes use of a different tag set to compose
<hr/><h6>5) How do you insert a comment in HTML?</h6>
Comments in HTML begins with “”. For example:<br/>
[crayon-5f2d9a9645132343004896/]
<hr/><h6>6) Do all character entities display properly on all systems?</h6>
No, there are some character entities that cannot be displayed when the operating system that
the browser is running on does not support the characters. When that happens, these
characters are displayed as boxes.
<hr/><h6>7) What is an image map?</h6>
Image map lets you link to many different web pages using a single image. You can define
shapes in images that you want to make part of an image mapping.
<hr/><h6>8 ) What is the advantage of collapsing white space?</h6>
White spaces are a blank sequence of space characters, which is treated as a single space
character in HTML. Because the browser collapses multiple spaces into a single space, you can
indent lines of text without worrying about multiple spaces. This enables you to organize the
HTML code into a much more readable format.
<hr/><h6>9) Can attribute values be set to anything or are there specific values that they accept?</h6>
Some attribute values can be set to only predefined values. Other attributes can accept any
numerical value that represents the number of pixels for a size.

<hr/><h6>10) How do you insert a copyright symbol on a browser page?</h6>
To insert the copyright symbol, you need to type © or & #169; in an HTML file.
<hr/><h6>11) How do you create links to sections within the same page?</h6>
Links can be created using the tag, with referencing through the use of the number (#) symbol.
For example, you can have one line as BACK TO TOP, which would result in the words “BACK
TO TOP” appearing on the webpage and links to a bookmark named topmost. You then create
a separate tag command like somewhere on the top of the same webpage so that the user will
be linked to that spot when he clicked on “BACK TO TOP”.
<hr/><h6>12) Is there any way to keep list elements straight in an HTML file?</h6>
By using indents, you can keep the list elements straight. If you indent each subnested list in
further than the parent list that contains it, you can at a glance determine the various lists and
the elements that it contains.
<hr/><h6>13) If you see a web address on a magazine, to which web page does it point?</h6>
Every web page on the web can have a separate web address. Most of these addresses are
relative to the top-most web page. The published web address that appears within magazines
typically points this top-most page. From this top level page, you can access all other pages
within the website.
<hr/><h6>14) What is the use of alternative text in image mapping?</h6>
When you use image maps, it can easily become confusing and difficult to determine which
hotspots correspond to which links. Using alternative text lets, you put a descriptive text on each
hotspot link.
<hr/><h6>15) Do older HTML files work on newer browsers?</h6>
Yes, older HTML files are compliant to the HTML standard. Most older files work on the newer
browsers, though some features may not work.
<hr/><h6>16) Does a hyperlink apply to text only?</h6>
No, hyperlinks can be used in the text as well as images. That means you can convert an image
into a link that will allow users to link to another page when clicked. Surround the image within
the … tag combinations.
<hr/><h6>17) If the user’s operating system does not support the needed character, how can the
symbol be represented?</h6>
In cases wherein their operating system does not support a particular character, it is still

possible to display that character by showing it as an image instead.
<hr/><h6>18) How do you change the number type in the middle of a list?</h6>
The
  tag includes two attributes – type and value. The type attribute can be used to change the
numbering type for any list item. The value attribute can change the number index.
<hr/><h6>19) What are style sheets?</h6>
Style sheets enable you to build consistent, transportable, and well-defined style templates.
These templates can be linked to several different web pages, making it easy to maintain and
change the look and feel of all the web pages within site.
<hr/><h6>20) State bullet types available in HTML.</h6>
With ordered lists, you can select to use some different list types including alphabetical and
Roman numerals. The type attribute for unordered lists can be set to disc, square, or circle.
<hr/><h6>21) How do you create multicolored text in a webpage?</h6>
To create text with different colors, use the … tags for every character that you want to apply
color. You can use this tag combination as many times as needed, surrounding a single
character or an entire word.
<hr/><h6>22) Why are there both numerical and named character entity values?</h6>
The numerical values are taken from the ASCII values for the various characters, but these can
be difficult to remember. Because of this, named character entity values were created to make it
easier for web page designers to use.
<hr/><h6>23) Write an HTML table tag sequence that outputs the following:
50 pcs 100 500
10 pcs 5 50</h6>
Answer:
[crayon-5f2d9a964513a593876276/]
<hr/><h6>24) What is the advantage of grouping several checkboxes together?</h6>
Although checkboxes don’t affect one another, grouping checkboxes together help to organize
them. Checkbox buttons can have their name and do not need to belong to a group. A single
web page can have many different groups of checkboxes.
<hr/><h6>25) What will happen if you overlap sets of tags?</h6>
If two sets of HTML tags are overlapped, only the first tag will be recognized. You will find this

problem when the text does not display properly on the browser screen.
<hr/><h6>26) What are applets?</h6>
Applets are small programs that can be embedded within web pages to perform some specific
functionality, such as computations, animations, and information processing. Applets are written
using the Java language.
<hr/><h6>27) What if there is no text between the tags or if a text was omitted by mistake? Will it
affect the display of the HTML file?</h6>
If there is no text between the tags, then there is nothing to format. Therefore no formatting will
appear. Some tags, especially tags without a closing tag like the
tag, do not require any text between them.
<hr/><h6>28) Is it possible to set specific colors for table borders?</h6>
You can specify a border color using style sheets, but the colors for a table that does not use
style sheets will be the same as the text color.
<hr/><h6>29) How do you create a link that will connect to another web page when clicked?</h6>
To create hyperlinks, or links that connect to another web page, use the href tag. The general
format for this is: text
Replace “site” with the actual page URL that is supposed to be linked to when the text is
clicked.
<hr/><h6>30) What other ways can be used to align images and wrap text?</h6>
Tables can be used to position text and images. Another useful way to wrap text around an
image is to use style sheets.
<hr/><h6>31) Can a single text link point to two different web pages?</h6>
No. The tag can accept only a single href attribute, and it can point to only a single web page.
<hr/><h6>32) What is the difference between the directory and menu lists and the unordered list?</h6>
The key difference is that the directory and menu lists do not include attributes for changing the
bullet style.
<hr/><h6>33) Can you change the color of bullets?</h6>
The bullet color is always the same as that of the first character in the list item. If you surround

the
  and the first character with a set of tags with the color attribute set, the bullet color, and the
first character will be a different color from the text.
<hr/><h6>34) What are the limits of the text field size?</h6>
The default size for a text field is around 13 characters. However, if you include the size
attribute, you can set the size value to be as low as 1. The maximum size value will be
determined by the browser width. If the size attribute is set to 0, the size will be set to the default
size of 13 characters.
          
        </p>
                </div>
                




                <div class= "section">
          <p>
                        <a name="Q2"></a><h3>CSS</h3>
                        
                        <hr/> <h6>1. What is CSS ?</h6>
                        The full form of CSS is Cascading Style Sheets. It is a styling language which is simple enough
                        for HTML elements. It is popular in web designing, and its application is common in XHTML
                        also.
                        <hr/>  <h6>  2. What is the origin of CSS ?</h6>
                        Standard Generalized Markup Language marked the beginning of style sheets in 1980s.
                        <hr/> <h6>  3. What are the different variations of CSS ?</h6>
                        The variations for CSS are:<br/>
                        CSS 1<br/>
                        CSS 2<br/>
                        CSS 2.1<br/>
                        CSS 3<br/>
                        CSS 4
                        <hr/> <h6>  4. What are the limitations of CSS ?</h6>
                        Limitations are:<br/>
                          Ascending by selectors is not possible<br/>
                        Limitations of vertical control<br/>
                        No expressions<br/>
                        No column declaration<br/>
                        Pseudo-class not controlled by dynamic behavior<br/>
                        Rules, styles, targeting specific text not possible

                        <hr/> <h6>  5. What are the advantages of CSS ?</h6>
                        Advantages are:<br/>
                        Bandwidth<br/>
                        Site-wide consistency<br/>
                        Page reformatting<br/>
                        Accessibility<br/>
                        Content separated from presentation
                        <hr/>   <h6>   6. What are CSS frameworks?</h6>
                        It is a pre-planned libraries, which allows easier and more standards-compliant webpage styling,
                        using CSS language.
                        <hr/>  <h6>  7. How block elements can be centered with CSS1?</h6>
                        Block level elements can be centered by:<br/>
                        The margin-left and margin-right properties can be set to some explicit value:<br/>
                        [crayon-5f2d3ac4a1056148982623/]
                        In this case, the left and right margins will be each, five ems wide since they split up the ten ems
                        left over from (40em-30em). It was unnecessary for setting up an explicit width for the BODY
                        element; it was done here for simplicity.
                        <hr/>   <h6> 8. Who maintains the CSS specifications?</h6>
                        World Wide Web Consortium maintains the CSS specifications.
                        <hr/> <h6>   9. In how many ways can a CSS be integrated as a web page?</h6>
                        CSS can be integrated in three ways:<br/>
                        Inline: Style attribute can be used to have CSS applied HTML elements.<br/>
                        Embedded: The Head element can have a Style element within which the code can be<br/>
                        placed.<br/>
                        Linked/ Imported: CSS can be placed in an external file and linked via link element.
                        <hr/>   <h6> 10. What benefits and demerits do External Style Sheets have?</h6>
                        Benefits:<br/>
                        One file can be used to control multiple documents having different styles.
                        Multiple HTML elements can have many documents, which can have classes.

                        To group styles in composite situations, methods as selector and grouping are used.<br/>
                        Demerits:<br/>
                        Extra download is needed to import documents having style information.
                        To render the document, the external style sheet should be loaded.
                        Not practical for small style definitions.
                        <hr/>  <h6>   11. Discuss the merits and demerits of Embedded Style Sheets?</h6>
                        Merits of Embedded Style Sheets:<br/>
                        Multiple tag types can be created in a single document.<br/>
                        Styles, in complex situations, can be applied by using Selector and Grouping methods.<br/>
                        Extra download is unnecessary.<br/>
                        Demerits of Embedded Style Sheets:<br/>
                        Multiple documents cannot be controlled.
                        <hr/>   <h6>  12. What does CSS selector mean?</h6>
                        A string equivalent of HTML elements by which declarations or a set of it, is declared and is a
                        link that can be referred for linking HTML and Style sheet is CSS selector.
                        <hr/>  <h6>  13. Enlist the media types CSS allows?</h6>
                        The design and customization of documents are rendered by media. By applying media control
                        over the external style sheets, they can be retrieved and used by loading it from the network.
                        <hr/> <h6>  14. Differentiate logical tags from physical tags?</h6>
                        While physical tags are also referred to as presentational mark-up, logical tags are
                        useless for appearances.
                        Physical tags are newer versions while logical tags are old and concentrate on content.
                        <hr/>   <h6>  15. Differentiate Style Sheet concept from HTML?</h6>
                        While HTML provides easy structure method, it lacks styling, unlike Style sheets. Moreover,
                        Ruleset : Selectors can be attached to other selectors to be identified by ruleset.
                          style sheets have better browser capabilities and formatting options.    
                          <hr/>
                          <h6>16. Describe ‘ruleset’?</h6>
                          It has two parts:<br/>

                        Selector, e.g. R and
                        declaration curlybracket text-indent: 11pt curlybracket
                        <hr/><h6>  17. Comment on the Case-sensitivity of CSS ?</h6>
                        Although, there are no case-sensitivity of CSS, nevertheless font families, URL’s of images, etc
                        is. Only when XML declarations along with XHTML DOCTYPE are being used on the page,
                        CSS is case -sensitive.
                        <hr/> <h6>   18. Define Declaration block?</h6>
                        A catalog of directions within braces consisting of property, colon and value is called declaration
                        block.<br/>
                        e.g.: [property 1: value 3]
                        <hr/> <h6>   19. Enlist the various fonts’ attributes?</h6>
                        They are:<br/>
                        Font-style<br/>
                        Font-variant<br/>
                        Font-weight<br/>
                        Font-size/line-height<br/>
                        Font-family<br/>
                        Caption<br/>
                        Icon
                        <hr/> <h6>  20. Why is it easy to insert a file by importing it?</h6>
                        Importing enables combining external sheets to be inserted in many sheets. Different files and
                        sheets can be used to have different functions. Syntax:<br/>
                        @import notation, used with tag.
                        <hr/> <h6>   21. What is the usage of Class selector?</h6>
                        Selectors that are unique to a specific style, are called CLASS selectors. Declaration of style
                        and association with HTML can be made through this. Syntax:<br/>
                        Classname<br/>
                        it can be A-Z, a-z or digits.<br/>
                        .top curlybracket font: 14em ;curlybracket, class selector<br/>
                          this class is associated with element

                          <hr/>   <h6>  22. Differentiate Class selector from ID selector?</h6>
                        While an overall block is given to class selector, ID selector prefers only a single element
                        differing from other elements. In other words, ID are uniques while classes are not. Its possible
                        that an element has both class and ID.
                        <hr/>   <h6>  23. Can more than one declaration be added in CSS?</h6>
                        Yes, it can be achieved by using a semicolon.
                        <hr/>  <h6>  24. What is Pseudo-elements ?</h6>
                        Pseudo-elements are used to add special effects to some selectors. CSS in used to apply
                        styles in HTML mark-up. In some cases when extra mark-up or styling is not possible for the
                        document, then there is a feature available in CSS known as pseudo-elements. It will allow
                        extra mark-up to the document without disturbing the actual document.
                        <hr/>  <h6>   25. How to overrule underlining Hyperlinks?</h6>
                        Control statements and external style sheets are used to overrule underlining Hyperlinks.
                        
                        <hr/>  <h6>  26. What happens if 100% width is used along with floats all across the page?</h6>
                        While making the float declaration, 1 pixel is added every time it is used in the form of the
                        border, and even more float is allowed thereafter.
                        <hr/> <h6>  27. Can default property value be restored through CSS? If yes, how?</h6>
                        In CSS, you cannot revert back to old values due to lack of default values. The property can be
                        re- declared to get the default property.
                        <hr/>  <h6>  28. Enlist the various Media types used?</h6>
                        Different media has different properties as they are case insensitive.
                        They are:<br/>
                        Aural – for sound synthesizers and speech<br/>
                        Print – gives a preview of the content when printed
                        Projection- projects the CSS on projectors.<br/>
                        Handheld- uses handheld devices.<br/>
                        Screen- computers and laptop screens.

                        <hr/>  <h6>  29. What is CSS Box Model and what are its elements?</h6>
                        This box defines design and layout of elements of CSS. The elements are:<br/>
                        Margin: the top most layer, the overall structure is shown<br/>
                        Border: the padding and content option with a border around it is shown. Background color
                        affects the border.<br/>
                        Padding: Space is shown. Background colour affects the border.<br/>
                        Content: Actual content is shown.
                        <hr/>  <h6>  30. What is contextual selector?</h6>
                        Selector used to select special occurrences of an element is called contextual selector. A space
                        separates the individual selectors. Only the last element of the pattern is addressed in this kind
                        of selector. For e.g.: TD P TEXT curlybracket color: blue curlybracket
                        <hr/>  <h6>  31. Compare RGB values with Hexadecimal color codes ?</h6>
                        A color can be specified in two ways:<br/>
                        A color is represented by 6 characters i.e. hexadecimal color coding. It is a combination
                        of numbers and letters and is preceded by #. e.g.: g curlybracket color: #00cjfi curlybracket<br/>
                        A color is represented by a mixture of red, green and blue. The value of a color can also
                        be specified. e.g.: rgb(r,g,b): In this type the values can be in between the integers 0 and
                        255. rgb(r%,g%,b%): red, green and blue percentage is shown.
                        <hr/>  <h6>   32. Define Image sprites with context to CSS ?</h6>
                        When a set of images is collaborated into one image, it is known as ‘Image Sprites’. As the
                        loading every image on a webpage consumes time, using image sprites lessens the time taken
                        and gives information quickly.
                        CSS coding:
                        [crayon-5f2d3ac4a1061258686686/]<br/>
                        In this case, only the part needed is used. The user can save substantial margin and time
                        through this.
                        <hr/>   <h6>   33. Compare Grouping and Nesting in CSS ?</h6>
                        Grouping: Selectors can be grouped having the same values of property and the code be
                        reduced.<br/>
                        E.g. :
                        [crayon-5f2d3ac4a1062779172901/]

                        It can be seen from the code that every element shares the same property. Rewriting can be
                        avoided by writing each selector separated by a comma.
                        Nesting: Specifying a selector within a selector is called nesting.
                        [crayon-5f2d3ac4a1063682785852/]
                        <hr/> <h6>  34. How can the dimension be defined of an element ?</h6>
                        Dimension properties can be defined by:<br/>
                        Height<br/>
                        Max-height<br/>
                        Max-width<br/>
                        Min-height<br/>
                        Min-width<br/>
                        Width
                        <hr/> <h6>   35. Define float property of CSS?</h6>
                        By float property, the image can be moved to the right or the left along with the text to be
                        wrapped around it. Elements before this property is applied do not change their properties.
                        <hr/><h6>  36. How does Z index function?</h6>
                        Overlapping may occur while using CSS for positioning HTML elements. Z index helps in
                        specifying the overlapping element. It is a number which can be positive or negative, the default
                        value being zero.
                        <hr/> <h6>  37. What is graceful degradation?</h6>
                        In case the component fails, it will continue to work properly in the presence of a graceful
                        degradation. The latest browser application is used when a webpage is designed. As it is not
                        available to everyone, there is a basic functionality, which enables its use to a wider audience.
                        In case the image is unavailable for viewing, text is shown with the alt tag.
                        <hr/> <h6> 38. What is progressive enhancement?</h6>
                        It’s an alternative to graceful degradation, which concentrates on the matter of the web. The
                        functionality is same, but it provides an extra edge to users having the latest bandwidth. It has
                        been into prominent use recently with mobile internet connections expanding their base.
                        <hr/>   <h6> 39. How can backward compatibility be designed in CSS?</h6>
                        HTML sheet methods is collaborated with CSS and used accordingly.

                        <hr/>  <h6>   40. How can the gap under the image be removed?</h6>
                        As images being inline elements are treated same as texts, so there is a gap left, which can be
                          removed by:<br/>
                        CSS
                        [crayon-5f2d3ac4a1065401161951/]
                        <hr/>   <h6>   41. Why is @import only at the top?</h6>
                        @import is preferred only at the top, to avoid any overriding rules. Generally, ranking order is
                        followed in most programming languages such as Java, Modula, etc. In C, the # is a prominent
                        example of a @import being at the top.
                        <hr/> <h6>  42. Which among the following is more precedent: CSS properties or HTML procedures?</h6>
                        CSS is more precedent over HTML procedures. Browsers, which do not have CSS support,
                        display HTML attributes.
                        <hr/> <h6>  43. What is Inline style?</h6>
                        The Inline style in a CSS is used to add up styling to individual HTML elements.
                        <hr/><h6>  44. How comments can be added in CSS?</h6>
                        The comments in CSS can be added with /* and */.
                        <hr/>    <h6>   45. Define Attribute Selector ?</h6>
                        It is defined by a set of elements, value and its parts.
                        <hr/>   <h6>   46. Define property?</h6>
                        A style, that helps in influencing CSS. E.g. FONT. They have corresponding values or
                        properties within them, like FONT has different style like bold, italic etc.
                        <hr/>   <h6>   47. What is Alternate Style Sheet?</h6>
                        Alternate Style Sheets allows the user to select the style in which the page is displayed using
                        the view rightarrow page style menu. Through Alternate Style Sheet, user can see a multiple version of
                        the page on their needs and preferences.
                        <hr/>   <h6>   48. Are quotes mandatory in URL’s?</h6>
                        Quotes are optional in URL’s, and it can be single or double.

                        <hr/>    <h6>  49. What is at-rule?</h6>
                        Rule, which is applicable in the entire sheet and not partly, is known as at-rule. It is preceded by
                        @ followed by A-Z, a-z or 0-9.
                        <hr/>   <h6>   50. How can CSS be cascaded to mix with user’s personal sheet?</h6>
                        Properties can be a set in recommended places and the document modified for CSS to mix with
                        user’s personal sheet.
              
        </p>
        </div>



                <div class= "section">
          <p>
            <a name="Q3"></a><h3>NODE JS</h3>
                        <hr/>
                                    <h6> 1. What is NPM?</h6>
                NPM stands for Node Package Manager. It is used for command line environment
                applied to install and manage Node.js Packages and repositories.
                <hr/>   <h6>2. What is Closures?</h6>
                Closure is a first-class function which is defined within another scope that has
                access to all the variables within the outer scope. Global variables can be made
                private with closures.
                <hr/>   <h6>3. Explain Modules in Node.js</h6>
                Modules are simple or complex functionalities in JavaScript files which can be
                reused throughout the Node.js platform. Each module in Node.js can be placed in a
                .js file in a separate folder. Also, Node.js modules have their own context, so it
                cannot interfere with others.
                <hr/>   <h6>4. Explain V8 Engine</h6>
                V8 is an open source JavaScript engine. It was developed by Google and is now
                used in Google Chrome, Node.js Couchbase, and MongoDB. The engine compiles
                JavaScript to machine code before executing it, instead of most other techniques.
                The compiled code is further optimized dynamically at runtime, based on heuristics
                of the code's execution profile.
                <hr/>    <h6>5. Explain event loop in Node.js</h6>
                The event loop (Event Loop) is a mechanism that allows Node.js to perform
                non-blocking I / O operations (despite the fact that JavaScript is single-threaded) by
                uploading operations to the system kernel.
                <hr/>  <h6>6. Explain what is libuv in Node.js</h6>
                libuv in Node.js is a cross-platform I/O abstraction library, written in C. It suppors
                Windows IOCP, epoll(4), kqueue(2), and Solaris event ports.<br/>
                libUV library is used for the following:<br/>
                - cross-platform I / O operations, working with files, network<br/>
                - main Node.js event loop support
                <hr/>   <h6>7. Why Node is single threaded?</h6>
                As single thread operations run better than multi-threaded ones, it is done in order to
                improve Node.js general performance.
                <hr/>  <h6>8. What are event emitters in Node.js?</h6>
                Node.js objects trigger events to support asynchronous execution of core APIs used.
                Objects that emit events as called ‘event emitters’.
                <hr/> <h6>9. What is a cluster?</h6>
                Cluster is a process used to handle thread execution load while working with
                multi-core systems.
                <hr/>  <h6>10. Explain the difference between readFile and createReadStream in Node.js.</h6>
                readFile loads the whole file into the memory you selected, and
                fs.createReadStream reads the entire file in specified chunks of sizes. Using
                createReadStream, the client receives the data faster since it is sent in chunks
                while it’s being read. readFile though reads the whole file first before sending it to
                the client.
                <hr/>   <h6>11. Write the steps for setting up an Express.js application.</h6>
                In order to set Express.js up, a user has to follow these steps:<br/>
                1. Create a folder with the same name as the project is called.<br/>
                2. Add package.json file to the folder.<br/>
                3. Run “npm install” command to install all the libraries from package.json.<br/>
                4. Create a file named ‘server.js’.<br/>
                5. Create a “router” file inside the package consisting of a folder named index.js.<br/>
                6. To the package consisting of index.html file add “App” one.<br/>
                The installation of Express.js is done.
                <hr/>   <h6>12. Since Node is a single threaded process, how to make use of all CPUs?</h6>
                It’s possible to take advantage of all CPUs by using the cluster module. It contains a
                set of properties that help to create programs which use all the CPUs of multi-core
                systems.
                <hr/>   <h6>13. How can you use middleware in Express?</h6>
                Middleware in Express.js is a function that applies to the routing process, performing
                operations at some points. It’s widely used for editing request and response objects
                as well as terminating the request before it reaches the route handler code.
                In order to set a middleware up, you need to invoke app.use() for each new layer
                you’d like to add. Middleware in Express.js can be the same for all paths or used
                only for a specific path your server handles.
                <hr/>  <h6>14. Explain the difference between process nextTick() and setImmediate()?</h6>
                The main difference between nextTick() and setImmediate() processes is that
                setImmediate() queus its callbacks on the even loop and nextTick() does not. Thus,
                as nextTick() callbacks execute before the even loop, they run prior to
                setImmediate() ones.

                            
        </p>
            </div>
            </div>
    </div>


              <footer>
                <div class="row footer">
                    <h6>Last Updated: Tuesday, January 12, 2021<br />
                      Centre for Development of Advanced Computing (C-DAC Mumbai)</h6>
                </div>
              </footer>
    </div>
        );
      }
   
  



function QuestionBank()
{
  return (<div>     
    </div>
    );
}


function Workspace()
{
  return (<div>     
    </div>
    );
}

export default App;
