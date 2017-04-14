using System;

namespace websiteCS
{
	class MainClass
	{
		public static void Main()
		{
			Console.Write("Enter your name: ");
			string input = Console.ReadLine();
			string firstInitial = (input.ToUpper()).Substring(0, 1);
			int spaceLocation = input.IndexOf(" ") + 1;
			int inputLength = input.Length;
			string lastName = (input.ToUpper()).Substring(spaceLocation, inputLength - spaceLocation);
			Console.WriteLine(firstInitial + " " + lastName);
			Console.ReadLine();
		}
	}
}