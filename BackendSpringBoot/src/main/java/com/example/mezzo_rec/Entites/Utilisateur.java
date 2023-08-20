package com.example.mezzo_rec.Entites;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Utilisateur implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String firstName;
	private String lastName;
	private int age;
	private String email;
	private String password;         
	private Date starterDate;
	private boolean active;
private String etude;
private String competence;
private String formation;
private String competanceLi;
private String genre;
private int tel;
	public Utilisateur() {
	}

	public Utilisateur(Long id, String firstName, String lastName, int age, String email, String password,
			Date starterDate, boolean active,String competanceLi,String formation ,String etude ,String competence,String genre
	,int tel) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.email = email;
		this.password = password;
		this.starterDate = starterDate;
		this.active = active;
		this.competanceLi=competanceLi;
		this.etude=etude;
		this.competence=competence;
		this.formation=formation;
		this.genre=genre;
		this.tel = tel;

	}

	public int getTel() {
		return tel;
	}

	public void setTel(int tel) {
		this.tel = tel;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getEtude() {
		return etude;
	}

	public void setEtude(String etude) {
		this.etude = etude;
	}

	public String getCompetence() {
		return competence;
	}

	public void setCompetence(String competence) {
		this.competence = competence;
	}

	public String getFormation() {
		return formation;
	}

	public void setFormation(String formation) {
		this.formation = formation;
	}

	public String getCompetanceLi() {
		return competanceLi;
	}

	public void setCompetanceLi(String competanceLi) {
		this.competanceLi = competanceLi;
	}

	public Long getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setId(int id) {
		this.id = (long) id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getStarterDate() {
		return starterDate;
	}

	public void setStarterDate(Date starterDate) {
		this.starterDate = starterDate;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Utilisateur [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age
				+ ", Email=" + email + ", password=" + password + ", starterDate=" + starterDate + ", active=" + active
				+ "]";
	}

}
